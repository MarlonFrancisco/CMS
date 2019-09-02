import { Grid, TextField } from "@material-ui/core";
import React, { useContext } from "react";
import Context from "./../context";

interface IContent {
    type: string;
    name: string;
}

export default function({ contents }) {
    const { content } = useContext<any>(Context);
    const handleChange = (fieldName: string) => (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        content[fieldName] = event.target.value;
    };
    const Area = (field: IContent) => {
        if (field.type === "Text") {
            return (
                <TextField
                    fullWidth
                    label={field.name}
                    onChange={handleChange(field.name)}
                />
            );
        } else if (field.type === "Html") {
            return (
                <TextField
                    fullWidth
                    multiline
                    rows={4}
                    label={field.name}
                    onChange={handleChange(field.name)}
                />
            );
        }
    };

    return (
        <>
            {contents.map(
                (field: IContent, index: number) =>
                    field.type !== "Image" && (
                        <Grid item xs={12} md={6} key={index}>
                            {Area(field)}
                        </Grid>
                    ),
            )}
        </>
    );
}
