import styled from "styled-components";

import { Button, Grid } from "@material-ui/core";

export const ActionsGrid = styled(Grid)`
    padding-top: 20px;

    button {
        margin-left: 10px;
    }
`;

export const UploadButton = styled(Button)`
    position: relative;
    input {
        opacity: 0;
        width: 100%;
        position: absolute;
    }
`;
