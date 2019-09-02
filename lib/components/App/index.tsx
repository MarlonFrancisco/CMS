import React from "react";
import { RouteProps, withRouter } from "react-router";
import Chart from "./chart";
import Content from "./content";
import Header from "./header";
import Home from "./home";

const App = (props: RouteProps) => {
    const content = () => {
        const path = props.location.pathname;
        if (path === "/app") {
            return <Home />;
        } else if (path === "/app/content") {
            return <Content />;
        } else {
            return <Chart />;
        }
    };

    return (
        <>
            <Header />
            {content()}
        </>
    );
};

export default withRouter(App);
