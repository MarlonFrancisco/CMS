import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    MenuItem,
    Select,
    TextField,
} from "@material-ui/core";
import React, { useContext, useState } from "react";
import configs from "../../../../content.json";
import Context from "./../context";

interface IContent {
    type: string;
    name: string;
}

export default function({ state, close }) {
    const [data, setData] = useState({
        type: "",
        name: "",
    });

    const { update } = useContext<any>(Context);

    const reset = () => {
        close(false);
        setData({ type: "", name: "" });
    };

    const handleClose = () => reset();

    const handleConfirm = () => {
        reset();
        update(data);
    };

    const changeValue = (
        event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>,
        field: string,
    ) => {
        setData({ ...data, [field]: event.target.value });
    };

    return (
        <Dialog open={state} onClose={() => close(false)} disableBackdropClick>
            <DialogTitle>Add Field</DialogTitle>
            <DialogContent>
                <Select
                    fullWidth
                    value={data.type}
                    onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
                        changeValue(event, "type")
                    }
                >
                    {configs.types.map((type, index) => (
                        <MenuItem value={type.type} key={index}>{type.type}</MenuItem>
                    ))}
                </Select>
                <TextField
                    fullWidth
                    label="Field name"
                    value={data.name}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        changeValue(event, "name")
                    }
                />
            </DialogContent>
            <DialogActions>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleConfirm}
                >
                    Confirm
                </Button>
                <Button
                    variant="outlined"
                    color="default"
                    onClick={handleClose}
                >
                    Cancel
                </Button>
            </DialogActions>
        </Dialog>
    );
}
