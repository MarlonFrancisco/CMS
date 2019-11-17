import {
    Grid,
    List,
    ListItem,
    ListItemAvatar,
    ListItemIcon,
    ListItemText,
    ListSubheader,
    Paper,
} from "@material-ui/core";
import React from "react";
import { IProject } from "../../../../typings/interfaces";
import ContributionsList from "./ContributionsList";
import { ListStyled } from "./../styled";

export default function({ user }) {
    let contributions = [];

    if (user.member) {
        user.member.map((project: IProject) => {
            contributions = [...project.contents];
        });
    }

    const render = () => {
        if (contributions.length) {
            return <ContributionsList contributions={contributions}/>;
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
                <ListStyled
                    component="nav"
                    subheader={<ListSubheader>Contributions</ListSubheader>}
                >
                    {render()}
                </ListStyled>
            </Paper>
        </Grid>
    );
}
