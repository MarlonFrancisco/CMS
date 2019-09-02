import React from "react";

import FormLogin from "./FormLogin";

import { Grid, Typography } from "@material-ui/core";
import { RouterProps } from "react-router";
import { withRouter } from "react-router-dom";
import { GridContainer, GridForm } from "./styled";

const index = (props: RouterProps) => {
    return (
        <GridContainer container>
            <Grid
                container
                item
                sm={12}
                md={6}
                justify="center"
                alignItems="center"
            >
                <Typography variant="h4" color="primary" component="h2">
                    Olá, sejá bem vindo!
                </Typography>
            </Grid>

            <GridForm
                container
                item
                alignItems="center"
                justify="center"
                sm={12}
                md={6}
            >
                <FormLogin history={props.history} />
            </GridForm>
        </GridContainer>
    );
};

export default withRouter(index);
