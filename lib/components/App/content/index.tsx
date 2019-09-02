import React, { useEffect, useState } from "react";
import Actions from "./actions";
import Add from "./add";
import Context from "./context";
import Form from "./form";

import { Container, Grid } from "@material-ui/core";
import { withRouter } from "react-router";
import { Loading } from "../../GlobalStyled";

interface IContent {
    type: string;
    name: string;
}

function Content({ history }) {
    const [contents, setContent] = useState<IContent[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const update = (value: IContent): void => {
        setContent([...contents, value]);
    };

    const clear = (): void => {
        setContent([]);
    };

    const endLoading = () => setLoading(false);
    const initLoading = () => setLoading(true);

    const render = () => {
        if (contents.length) {
            return (
                <>
                    <Form contents={contents} />
                    <Actions uploadImage={image} cancel={clear} />
                </>
            );
        }
    };

    const verifyImage = contents.filter((content) => content.type === "Image")
        .length;

    let image = verifyImage && true;
    useEffect(() => {
        image = verifyImage && true;
    }, [contents]);

    return (
        <Container maxWidth="lg">
            <Context.Provider
                value={{ update, content: {}, endLoading, initLoading, history }}
            >
                <Grid container spacing={3}>
                    <Add />
                    {render()}
                </Grid>
            </Context.Provider>
            <Loading active={loading} />
        </Container>
    );
}

export default withRouter(Content);
