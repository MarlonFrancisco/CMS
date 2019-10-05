import { List, ListItem, ListItemText } from "@material-ui/core";
import React, { useState } from "react";
import { RouteProps, withRouter } from "react-router";
import { IProjectActive } from "../../typings/projectActive";
import Account from "./account";
import Chart from "./chart";
import Content from "./content";
import Context from "./context";
import Header from "./header";
import Home from "./home";
import Modal from "./modal";

const App = (props: RouteProps) => {
    const [body, setBody] = useState<React.ReactFragment>(<></>);
    const [drawer, setDrawer] = useState<boolean>(false);
    const [projectActive, setProjectActive] = useState<IProjectActive>({
        name: "",
        id: "",
    });
    const openDrawer = (fields: any) => {
        setBody(
            <List>
                {Object.entries(fields).map((field) => (
                    <ListItem>
                        <ListItemText primary={field[0]} secondary={field[1]}/>
                    </ListItem>
                ))}
            </List>,
        );

        setDrawer(true);
    };
    const content = () => {
        const path = props.location.pathname;
        if (path === "/app") {
            return <Home />;
        } else if (path === "/app/content") {
            return <Content />;
        } else if (path === "/app/chart") {
            return <Chart />;
        } else if (path === "/app/account") {
            return <Account />;
        }
    };
    return (
        <>
            <Context.Provider
                value={{ projectActive, setProjectActive, openDrawer }}
            >
                <Header />
                {content()}
                <Modal
                    content={body}
                    position="top"
                    state={drawer}
                    update={setDrawer}
                />
            </Context.Provider>
        </>
    );
};

export default withRouter(App);
