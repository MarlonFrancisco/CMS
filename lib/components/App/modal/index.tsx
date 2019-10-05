import React from "react";
import { SwipeableDrawer } from "@material-ui/core";

export default function({ content, position, state, update }) {
    const updateDrawer = (state: boolean) => (e: React.MouseEvent) => {
        update(state);
    }
    return (
        <SwipeableDrawer anchor={position} open={state} onClose={updateDrawer(false)} onOpen={updateDrawer(true)}>
            {content}
        </SwipeableDrawer>
    );
}