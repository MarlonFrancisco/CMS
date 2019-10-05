import React, { useState } from "react";
import { IContent } from "../../../../typings/interfaces";
import { ListItem, ListItemAvatar, Avatar, ListItemText, ListItemIcon } from "@material-ui/core";
import { OpenInNew } from "@material-ui/icons";
import { useContext } from "react";
import Context from "./../../context";
export default function({ contributions }) {
    const { openDrawer } = useContext(Context);
    const open = (fields: any) => (event: React.MouseEvent) => {
        openDrawer(fields);
    }

    return (
        contributions.reverse().map((content: IContent, index: number) => (
            <ListItem button key={index}>
                <ListItemAvatar>
                    <Avatar
                        src={`${process.env.AVATARICON}${content.assignedTo.email}.png`}
                    />
                </ListItemAvatar>
                <ListItemText
                    primary={content.assignedTo.name}
                    secondary={`Contribution: ${new Date(content.publish).toLocaleString()}`}
                />
                <ListItemIcon>
                    <OpenInNew onClick={open(content.content)} />
                </ListItemIcon>
            </ListItem>
        ))
    );
}