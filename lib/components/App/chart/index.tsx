import { Container, Grid, Paper } from "@material-ui/core";
import React from "react";
import { GridContainer } from "../../login/styled";
import Contributions from "./contributions";
import Porcentage from "./porcentage";

export default function() {
    return (
        <Container>
            <GridContainer container>
                <Contributions />
                <Grid item xs={12}>
                    <Paper>
                        <Porcentage />
                    </Paper>
                </Grid>
            </GridContainer>
        </Container>
    );
}
