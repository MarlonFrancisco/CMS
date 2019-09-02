import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap');

    * {
        margin: 0;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        width: 100vw;
        height: 100vh;
        -webkit-font-smoothing: antialiased !important;
        font-family: "Roboto", sans-serif;
        overflow-x: hidden;
    }
`;
