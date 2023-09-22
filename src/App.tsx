import React from "react";
import { AppRoutes } from "./routes";
import { BrowserRouter } from "react-router-dom";

import { DrawerMenu } from "./shared/components";
import { DrawerProvider, AppThemeProvider } from "./shared/context";

// To facilitate import
export const App = () => {
  return (
    <AppThemeProvider>
      <DrawerProvider>
        <BrowserRouter>

          <DrawerMenu>
            <AppRoutes></AppRoutes>
          </DrawerMenu>
          
        </BrowserRouter>
      </DrawerProvider>
    </AppThemeProvider>
  );
};
