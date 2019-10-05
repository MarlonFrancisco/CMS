import { Grid, TextField } from "@material-ui/core";
import React, { ChangeEvent, useState } from "react";
import { IChangeData } from "../../../../typings/interfaces";
import Actions from "./actions";
import Form from "./form";

export default function() {
    const [form, setForm] = useState<IChangeData>({
        name: "",
        password: "",
        email: "",
    });
    const handleChange = (type: string) => (
        event: ChangeEvent<HTMLInputElement>,
    ) => {
        const value = event.target.value;
        if (type === "name") {
            setForm({ ...form, name: value });
        } else if (type === "password") {
            setForm({ ...form, password: value });
        } else if (type === "email") {
            setForm({ ...form, email: value });
        }
    };

    return (
        <Grid container spacing={3}>
            <Form change={handleChange} data={form} />
            <Actions />
        </Grid>
    );
}
