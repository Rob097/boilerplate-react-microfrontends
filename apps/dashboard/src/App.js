import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AuthStoreProvider } from "context/stores/AuthStore";
import { SoftUIControllerProvider } from "context/stores/DashboardStore";
import { StoreProvider } from "context/stores/Store";
import theme from "context/theme";
import React from 'react';
import { createRoot } from 'react-dom/client';
import i18n from "../public/i18n/i18n";
import CustomRouterProvider from "./Routes";
import "@/index.scss";

const App = () => {
  console.debug("i18n for dashboard initialized: %O", i18n);
  console.log("theme for dashboard initialized: %O", theme);
  return (
    // Theme providers
    <SoftUIControllerProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        {/* Store providers */}
        <StoreProvider>
          <AuthStoreProvider>

            {/* Routes */}
            <CustomRouterProvider />

          </AuthStoreProvider>
        </StoreProvider>

      </ThemeProvider>
    </SoftUIControllerProvider>
  )
};
const root = createRoot(document.getElementById("app"));
root.render(<App />);