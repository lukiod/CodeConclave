import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AuthProvider } from "./contexts/AuthContext";
import { EditorProvider } from "./contexts/EditorContext";
import { ThemeProvider, useTheme } from "./contexts/ThemeContext"; // ✅ only this one
import "./styles/global.css";
import "./index.css";

import { ThemeProvider as SCThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyle.js";
import { lightTheme, darkTheme } from "./theme.js";

// Wrapper that applies styled-components theme
function ThemedApp() {
  const { theme } = useTheme();
  const activeTheme = theme === "dark" ? darkTheme : lightTheme;

  return (
    <SCThemeProvider theme={activeTheme}>
      <GlobalStyle />
      <App />
    </SCThemeProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider>
          <EditorProvider>
            <ThemedApp /> {/* ✅ use ThemedApp instead of plain <App /> */}
          </EditorProvider>
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
