import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';

import { AppThemeProvider } from './shared/context/ThemeContext';
import { DrawerMenu } from './shared/components';

// To facilitate import
export const App = () => {
  return (
    <AppThemeProvider>
      <BrowserRouter>
      <DrawerMenu >
        <AppRoutes></AppRoutes>
      </DrawerMenu>
      </BrowserRouter>
    </AppThemeProvider>
  );
}
