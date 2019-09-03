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
import { IMembers, IProject } from "../../../../models/home";

export default function({ user }) {
    let group = [];
    if (user.member) {
        user.member
            .map((project: IProject) => {
                group = [...project.members];
            });
    }

    const render = () => {
        if (group.length) {
            return group.map((member: IMembers) => (
                <ListItem button key={member._id}>
                    <ListItemAvatar>
                        <Avatar
                            src={`${process.env.AVATARICON}${member.email}.png`}
                        />
                    </ListItemAvatar>
                    <ListItemText primary={member.name} secondary="Member" />
                </ListItem>
            ));
        } else {
            return (
                <ListItem button>
                    <ListItemText secondary="Not member founded" />
                </ListItem>
            );
        }
    };

    return (
        <Grid item xs={12} md={4}>
            <Paper>
                <List
                    component="nav"
                    subheader={<ListSubheader>My Group</ListSubheader>}
                >
                    {render()}
                </List>
            </Paper>
        </Grid>
    );
}