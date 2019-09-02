import {
    Grid,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from "@material-ui/core";
import { Add } from "@material-ui/icons";
import Describe from "./../describe";

import React, { useState } from "react";

export default function() {
    const [state, setState] = useState<boolean>(false);

    return (
        <Grid item xs={12}>
            <List>
                <ListItem button color="default" onClick={() => setState(true)}>
                    <ListItemIcon>
                        <Add color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="Adicinar campo" />
                </ListItem>
            </List>

            <Describe state={state} close={setState}/>
        </Grid>
    );
}
