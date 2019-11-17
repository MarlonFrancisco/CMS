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
import { IMember, IProject } from "../../../../typings/interfaces";
import { ListStyled } from "../styled";

export default function({ user }) {
    let group = [];
    if (user.member) {
        user.member.map((project: IProject) => {
            group = [...project.members];
        });
    }

    const render = () => {
        if (group.length) {
            return group.map((member: IMember) => (
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
                <ListStyled
                    component="nav"
                    subheader={<ListSubheader>My Group</ListSubheader>}
                >
                    {render()}
                </ListStyled>
            </Paper>
        </Grid>
    );
}
