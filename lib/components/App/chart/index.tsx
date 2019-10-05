import { Container, Grid, Paper } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { ToastsStore } from "react-toasts";
import api from "../../../services/api";
import { Loading } from "../../GlobalStyled";
import { GridContainer } from "../../login/styled";
import Contributions from "./contributions";
import Porcentage from "./porcentage";
import { useContext } from "react";
import context from "./../context";
import { IProjectActive } from "../../../typings/projectActive";

export default function() {
    const [project, setProject] = useState({});
    const [loading, setLoading] = useState<boolean>(false);
    const { projectActive } = useContext<{ projectActive: IProjectActive}>(context);
    const request = async () => {
        setLoading(true);
        try {
            const res = await api.get(`/project/${projectActive.id}`);
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
                <Porcentage data={project}/>
                <Loading active={loading} />
            </GridContainer>
        </Container>
    );
}
