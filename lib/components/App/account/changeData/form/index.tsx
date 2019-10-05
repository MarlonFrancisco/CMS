import { Grid, TextField } from "@material-ui/core";
import React from "react";

export default function({ data, change }) {
    return (
        <>
            <Grid item xs={12} md={6}>
                <TextField
                    label="Name"
                    value={data.name}
                    fullWidth
                    onChange={change("name")}
                />
            </Grid>

            <Grid item xs={12} md={6}>
                <TextField
                    label="Password"
                    value={data.password}
                    fullWidth
                    onChange={change("password")}
                />
            </Grid>

            <Grid item xs={12} md={12}>
                <TextField
                    label="Email"
                    value={data.email}
                    fullWidth
                    onChange={change("email")}
                />
            </Grid>
        </>
    );
}
