import { Menu, MenuItem } from "@material-ui/core";
import React from "react";
import { ToastsStore } from "react-toasts";
import { logout } from "./../../../auth";

interface IProps {
    closeMenu: () => void;
    menuState: null | HTMLElement;
    history: any;
}

export default function(props: IProps) {
    const menu = Boolean(props.menuState);

    const myAccount = () => {
        props.history.push("/app/account");
        props.closeMenu();
    };

    const endSession = () => {
        logout();
        ToastsStore.success("Logout with success!");
        props.closeMenu();
        props.history.push("/");
    };

    return (
        <Menu
            anchorEl={props.menuState}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            open={menu}
            onClose={props.closeMenu}
        >
            <MenuItem onClick={myAccount}>My account</MenuItem>
            <MenuItem onClick={endSession}>Logout</MenuItem>
        </Menu>
    );
}
