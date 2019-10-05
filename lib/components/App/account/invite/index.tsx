import { Button, Grid, TextField } from "@material-ui/core";
import React from "react";

export default function() {
    return (
        <Grid container spacing={5}>
            <Grid item xs={12} md={8}>
                <TextField label="Email" fullWidth />
            </Grid>
            <Grid item xs={12} md={4}>
                <Button
                    variant="outlined"
                    size="large"
                    fullWidth
                    color="primary"
                >
                    Invite
                </Button>
            </Grid>
        </Grid>
    );
}
