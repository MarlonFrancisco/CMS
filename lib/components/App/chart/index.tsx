import { Container, Grid, Paper } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { ToastsStore } from "react-toasts";
import api from "../../../services/api";
import { Loading } from "../../GlobalStyled";
import { GridContainer } from "../../login/styled";
import Contributions from "./contributions";
import Porcentage from "./porcentage";

export default function() {
    const [project, setProject] = useState({});
    const [loading, setLoading] = useState<boolean>(false);
    const request = async () => {
        setLoading(true);
        try {
            const res = await api.get(`/project/${process.env.PROJECTID}`);
            setLoading(false);
            setProject(res.data);
            ToastsStore.success("Charts loaded with success");
        } catch (e) {
            setLoading(false);
            ToastsStore.info("Data not founded");
        }
    };

    useEffect(() => {
        let isSubscribe = true;

        if (isSubscribe) {
            request();
        }

        return () => (isSubscribe = true);
    }, []);
    return (
        <Container>
            <GridContainer container>
                <Contributions data={project}/>
                <Grid item xs={12}>
                    <Paper>
                        <Porcentage data={project}/>
                    </Paper>
                </Grid>
                <Loading active={loading} />
            </GridContainer>
        </Container>
    );
}
