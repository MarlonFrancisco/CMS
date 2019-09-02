import React, { useState } from "react";

import IconButton from "@material-ui/core/IconButton";
import IconMenu from "@material-ui/icons/Menu";
import IconUser from "@material-ui/icons/SupervisedUserCircle";
import Menu from "./Menu";
import Navigation from "./Navigation";
import { StyledToolbar } from "./styles";

import { AppBar, Drawer } from "@material-ui/core";
import { RouterProps, withRouter } from "react-router";

const index = (props: RouterProps) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [navigationStatus, setNavigationStatus] = useState<boolean>(false);

    function openMenuAnchor(event: React.MouseEvent<HTMLElement>) {
        const el = event.currentTarget as HTMLElement;
        setAnchorEl(el);
    }

    function closeMenuProfile() {
        setAnchorEl(null);
    }

    return (
        <>
            <AppBar position="relative">
                <StyledToolbar variant="dense">
                    <IconButton
                        edge="start"
                        onClick={() => setNavigationStatus(!navigationStatus)}
                        color="inherit"
                    >
                        <IconMenu />
                    </IconButton>

                    <IconButton
                        onClick={openMenuAnchor}
                        edge="end"
                        color="inherit"
                    >
                        <IconUser />
                    </IconButton>
                </StyledToolbar>
            </AppBar>

            <Menu
                closeMenu={closeMenuProfile}
                menuState={anchorEl}
                history={props.history}
            />

            <Drawer
                anchor="right"
                open={navigationStatus}
                onClose={() => setNavigationStatus(!navigationStatus)}
            >
                {Navigation(props.history)}
            </Drawer>
        </>
    );
};

export default withRouter(index);
