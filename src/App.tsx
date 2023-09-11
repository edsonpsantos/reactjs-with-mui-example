import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import { AppThemeProvider } from './shared/context/ThemeContext';

// To facilitate import
export const App = () => {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <AppRoutes></AppRoutes>
      </BrowserRouter>
    </AppThemeProvider>
  );
}


