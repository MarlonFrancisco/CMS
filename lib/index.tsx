import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import {
    ToastsContainer,
    ToastsContainerPosition,
    ToastsStore,
} from "react-toasts";
import App from "./components/App";
import Login from "./components/login";
import GlobalStyle from "./GlobalStyle";

import { isAuth } from "./auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={(props) =>
            isAuth() ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{ pathname: "/", state: { from: props.location } }}
                />
            )
        }
    />
);

ReactDOM.render(
    <>
        <GlobalStyle />
        <ToastsContainer
            position={ToastsContainerPosition.BOTTOM_RIGHT}
            store={ToastsStore}
        />
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login} />
                <PrivateRoute exact path="/app" component={App} />
                <PrivateRoute exact path="/app/content" component={App} />
                <PrivateRoute exact path="/app/chart" component={App} />
                <Route path="*" component={() => <h2>Not found</h2>} />
            </Switch>
        </BrowserRouter>
    </>,
    document.querySelector("#root"),
);
