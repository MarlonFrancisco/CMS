import styled, { keyframes } from "styled-components";

const Rotate = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

export const Loading = styled.div<{ active: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
    display: ${(props) => (props.active ? "block" : "none")};

    &::before {
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 65px;
        height: 65px;
        border-right: 3px solid #4f66da;
        border-radius: 50%;
        animation: ${Rotate} 2s ease-out infinite;
    }
`;
