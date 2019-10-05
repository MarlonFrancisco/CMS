import { Container } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { IProject, IMember } from "../../../typings/interfaces";
import api from "../../../services/api";
import { Loading } from "../../GlobalStyled";
import { GridContainer } from "../../login/styled";
import Contributions from "./contributions";
import Group from "./group";
import Project from "./projects";
import { useContext } from "react";
import Context from "./../context";
import { ToastsStore } from "react-toasts";

export default function() {
    const [loading, setLoading] = useState<boolean>(false);
    const [user, setUser] = useState({});
    const [projects, setProjects] = useState<IProject[]>();
    const { projectActive } = useContext<any>(Context);
    

    const request = async () => {
        setLoading(true);
        try {
            const res = await api.get<IMember>(`/user`);
            setProjects(res.data.member);
            res.data.member = res.data.member.filter(project => project.name === projectActive.name);
            setLoading(false);
            setUser(res.data);
            ToastsStore.success("Ready!");
        } catch (e) {
            setLoading(false);
            ToastsStore.info("Session expired!");
            throw new Error(e);
        }
    };

    useEffect(() => {
        let subscription = true;
        subscription && request();

        return () => subscription = false;
    }, [projectActive.name]);

    return (
        <>
            <Container>
                <GridContainer container spacing={2}>
                    <Group user={user} />
                    <Project projects={projects} />
                    <Contributions user={user} />
                </GridContainer>
                <Loading active={loading} />
            </Container>
        </>
    );
}
