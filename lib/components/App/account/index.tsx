import { Container, Grid, Tab, Tabs } from "@material-ui/core";
import React, { useState } from "react";
import ChangeData from "./changeData";
import CreateProject from "./createProject";
import Invite from "./invite";

export default function() {
    const [tab, setTab] = useState(0);
    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setTab(newValue);
    };
    const render = () => {
        if (tab === 0) {
            return <ChangeData />;
        } else if (tab === 1) {
            return <CreateProject />;
        } else if (tab === 2) {
            return <Invite />;
        }
    };

    return (
        <Container>
            <Grid container spacing={3}>
                <Grid item xs={12} md={3}>
                    <Tabs
                        orientation="vertical"
                        variant="fullWidth"
                        value={tab}
                        onChange={handleChange}
                    >
                        <Tab label="Change data" />
                        <Tab label="Create group" />
                        <Tab label="Invite member" />
                    </Tabs>
                </Grid>

                <Grid item xs={12} md={9}>
                    {render()}
                </Grid>
            </Grid>
        </Container>
    );
}
