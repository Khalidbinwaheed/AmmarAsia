
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Georgia', serif;
        background: #0a0a0a;
        color: #f5f5f5;
        overflow-x: hidden;
    }

    html {
        scroll-behavior: smooth;
        scroll-padding-top: 80px;
    }
    
    /* Scrollbar Styling (optional but good for dark mode) */
    ::-webkit-scrollbar {
        width: 10px;
    }
    ::-webkit-scrollbar-track {
        background: #1a1a1a;
    }
    ::-webkit-scrollbar-thumb {
        background: #d4af37;
        border-radius: 5px;
    }
    ::-webkit-scrollbar-thumb:hover {
        background: #f4d03f;
    }
`;
