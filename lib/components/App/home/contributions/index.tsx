import {
    Avatar,
    Grid,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    ListSubheader,
    Paper,
} from "@material-ui/core";
import React from "react";
import { IContents, IProject } from "../../../../models/home";

export default function({ user }) {
    let contributions = [];

    if (user.member) {
        user.member.map((project: IProject) => {
            contributions = [...project.contents];
        });
    }

    const render = () => {
        if (contributions.length) {
            return contributions.reverse().map((content: IContents, index: number) => (
                <ListItem button key={index}>
                    <ListItemAvatar>
                        <Avatar
                            src={`${process.env.AVATARICON}${content.assignedTo.email}.png`}
                        />
                    </ListItemAvatar>
                    <ListItemText
                        primary={content.assignedTo.name}
                        secondary={`Date contribution: ${new Date(content.publish).toLocaleString()}`}
                    />
                </ListItem>
            ));
        } else {
            return (
                <ListItem button>
                    <ListItemText secondary="Contributions not founded" />
                </ListItem>
            );
        }
    };
    return (
        <Grid item xs={12} md={4}>
            <Paper>
                <List
                    component="nav"
                    subheader={<ListSubheader>Contributions</ListSubheader>}
                >
                    {render()}
                </List>
            </Paper>
        </Grid>
    );
}
