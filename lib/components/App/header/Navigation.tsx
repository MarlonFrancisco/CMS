import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { BarChart, Drafts, Home } from "@material-ui/icons";
import React from "react";
import { Nav } from "./styles";

const linksNav = [
    { to: "/app", icon: <Home />, text: "Home" },
    { to: "/app/content", icon: <Drafts />, text: "Content" },
    { to: "/app/chart", icon: <BarChart />, text: "Chart" },
];

const Navigation = (history: any) => {
    return (
        <Nav>
            {linksNav.map((link) => (
                <ListItem key={link.to} button onClick={() =>  history.push(link.to)}>
                    <ListItemIcon>{link.icon}</ListItemIcon>
                    <ListItemText primary={link.text} />
                </ListItem>
            ))}
        </Nav>
    );
};

export default Navigation;
