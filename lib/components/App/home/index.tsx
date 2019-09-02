import { Container } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { IProject } from "../../../models/home";
import api from "../../../services/api";
import { Loading } from "../../GlobalStyled";
import { GridContainer } from "../../login/styled";
import Contributions from "./contributions";
import Group from "./group";
import Project from "./projects";

export default function() {
    const [loading, setLoading] = useState<boolean>(false);
    const [user, setUser] = useState({});
    const request = async () => {
        setLoading(true);
        try {
            const res = await api.get<IProject>(`/user`);
            setLoading(false);
            setUser(res.data);
        } catch (e) {
            setLoading(false);
            throw new Error(e);
        }
    };

    useEffect(() => {
        request();
    }, []);

    return (
        <>
            <Container>
                <GridContainer container spacing={2}>
                    <Group user={user} />
                    <Project user={user}/>
                    <Contributions user={user} />
                </GridContainer>
                <Loading active={loading} />
            </Container>
        </>
    );
}
