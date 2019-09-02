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
import { IProject } from "../../../../models/home";

export default function({ user }) {
    const projects = user.member ? [...user.member] : [];

    const render = () => {
        if (projects.length) {
            return projects.map((project: IProject) => (
                <ListItem button key={project._id}>
                    <ListItemAvatar>
                        <Avatar
                            src={`${process.env.AVATARICON}${project.name}.png`}
                        />
                    </ListItemAvatar>
                    <ListItemText primary={project.name} secondary="Project" />
                </ListItem>
            ));
        } else {
            return (
                <ListItem button>
                    <ListItemText secondary="Projects not founded" />
                </ListItem>
            );
        }
    };
    return (
        <Grid item xs={12} md={4}>
            <Paper>
                <List
                    component="nav"
                    subheader={<ListSubheader>My Projects</ListSubheader>}
                >
                    {render()}
                </List>
            </Paper>
        </Grid>
    );
}
