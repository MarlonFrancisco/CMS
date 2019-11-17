import { Button } from "@material-ui/core";
import React, { useContext } from "react";
import { ToastsStore } from "react-toasts";
import api from "../../../../services/api";
import Context from "./../context";
import { ActionsGrid, UploadButton } from "./styled";
import appContext from "./../../context";
import { IProjectActive } from "../../../../typings/projectActive";

export default function({ uploadImage, cancel }) {
    const { content, endLoading, initLoading, history } = useContext<any>(Context);
    const { projectActive } = useContext<{projectActive: IProjectActive}>(appContext);
    const render = () => {
        if (uploadImage) {
            return (
                <UploadButton variant="contained" size="large">
                    Image
                    <input type="file" />
                </UploadButton>
            );
        }
    };

    const save = async () => {
        initLoading();
        try {
            const body = {
                publish: new Date(),
                idProject: projectActive.id,
                content,
            };

            console.log(content);
            await api.post("/content", body);

            endLoading();
            history.push("/app");
            ToastsStore.success("Content created with success!");
        } catch (e) {
            endLoading();
            ToastsStore.error("Content not was created!");
            throw new Error(e);
        }
    };

    return (
        <ActionsGrid item xs={12}>
            <Button
                color="primary"
                size="large"
                variant="contained"
                onClick={save}
            >
                Save
            </Button>
            <Button
                color="inherit"
                size="large"
                variant="contained"
                onClick={cancel}
            >
                Cancel
            </Button>
            {render()}
        </ActionsGrid>
    );
}
