import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: "Roboto", sans-serif;
    transition: background-color 0.3s ease, color 0.3s ease;
  }
`;
