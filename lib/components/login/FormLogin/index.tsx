import { FormLabel, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { login } from "./../../../auth";
import api from "./../../../services/api";
import { Loading } from "./../../GlobalStyled";
import { ButtonForm, Form } from "./styled";
import { ToastsStore } from "react-toasts";

interface IForm {
    email: string;
    password: string;
}

export default function(props: any) {
    const [form, setForm] = useState<IForm>({ email: "", password: "" });
    const [loading, setLoading] = useState<boolean>(false);

    const handlerData = (name: keyof IForm) => (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        setForm({ ...form, [name]: event.target.value });
    };

    const loginHandler = async () => {
        setLoading(true);
        try {
            const resp = await api.post(
                `${process.env.BASE_URL_API}/auth/login`,
                form,
            );

            const { token } = resp.data;

            login(token);
            setLoading(false);
            ToastsStore.success("Login with success!");
            props.history.push("/app");
        } catch (e) {
            setLoading(false);
            ToastsStore.error("Email or password incorrect!");
            throw new Error(e);
        }
    };

    return (
        <Form>
            <FormLabel>Login</FormLabel>
            <TextField
                label="Email or Username"
                value={form.email}
                fullWidth
                margin="dense"
                onChange={handlerData("email")}
            />
            <TextField
                label="Password"
                value={form.password}
                fullWidth
                type="password"
                margin="dense"
                onChange={handlerData("password")}
            />

            <ButtonForm
                variant="contained"
                color="primary"
                fullWidth
                onClick={loginHandler}
            >
                ENTER
            </ButtonForm>
            <Loading active={loading} />
        </Form>
    );
}
