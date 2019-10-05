import { Button, Grid, TextField } from "@material-ui/core";
import React from "react";

export default function() {
    let name = "";
    return (
        <Grid container spacing={5}>
            <Grid item xs={12} md={8}>
                <TextField
                    label="Name group"
                    value={name}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        (name = event.target.value)
                    }
                    fullWidth
                />
            </Grid>
            <Grid item xs={12} md={4}>
                <Button
                    variant="outlined"
                    size="large"
                    fullWidth
                    color="primary"
                >
                    Create Group
                </Button>
            </Grid>
        </Grid>
    );
}
