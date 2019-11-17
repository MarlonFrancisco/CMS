import styled from "styled-components";
import { List } from "@material-ui/core";

export const ListStyled = styled(List)<any>`
    max-height: 560px;
    overflow-y: auto;

    &::-webkit-scrollbar {
        width: 7px;
        background: #adb3d040;
    }

    &::-webkit-scrollbar-thumb {
        background: #4054b5;
    }
`;