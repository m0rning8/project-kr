import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createTheme, MantineProvider } from "@mantine/core";
import AppRouter from "./router/AppRouter";
import '@mantine/core/styles.css';
const theme = createTheme({
  fontFamily: "Poppins, sans-serif",
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <MantineProvider theme={theme} defaultColorScheme="auto">
    <React.StrictMode>
      <AppRouter />
    </React.StrictMode>
  </MantineProvider>
);

reportWebVitals();
