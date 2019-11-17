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
import { IProject } from "../../../../typings/interfaces";
import { Active } from "./styled";
import { useContext } from "react";
import Context from "./../../context";
import { IProjectActive } from "../../../../typings/projectActive";
import { ListStyled } from "../styled";

export default function({ projects }) {
    const listProjects = projects ? [...projects] : [];
    const { projectActive, setProjectActive } = useContext<{projectActive: IProjectActive, setProjectActive: any}>(Context);

    const activeProject = (name: string, id: string) => (event: React.MouseEvent) => {
        setProjectActive({name, id});
    }

    const render = () => {
        if (listProjects.length) {
            return listProjects.map((project: IProject) => (
                <ListItem button key={project._id} onClick={activeProject(project.name, project._id)}>
                    <ListItemAvatar>
                        <Avatar
                            src={`${process.env.AVATARICON}${project.name}.png`}
                        />
                    </ListItemAvatar>
                    <ListItemText primary={project.name} secondary="Project" />
                    {projectActive.name === project.name && <Active />}
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
                <ListStyled
                    component="nav"
                    subheader={<ListSubheader>My Projects</ListSubheader>}
                >
                    {render()}
                </ListStyled>
            </Paper>
        </Grid>
    );
}
