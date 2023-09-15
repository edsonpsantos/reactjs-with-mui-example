import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';

import { DrawerMenu } from './shared/components';
import { AppDrawerProvider, AppThemeProvider } from './shared/context';

// To facilitate import
export const App = () => {
  return (
    <AppThemeProvider>
    <AppDrawerProvider>
      <BrowserRouter>
      <DrawerMenu >
        <AppRoutes></AppRoutes>
      </DrawerMenu>
      </BrowserRouter>
    </AppDrawerProvider>
    </AppThemeProvider>
  );
}
