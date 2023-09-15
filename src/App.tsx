import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";

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
