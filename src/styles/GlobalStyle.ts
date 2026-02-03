
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Lato', sans-serif;
        background: ${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors.text};
        overflow-x: hidden;
        line-height: 1.6;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Playfair Display', serif;
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
