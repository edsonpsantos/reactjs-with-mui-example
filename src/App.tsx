import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";

// To facilitate import
export const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes></AppRoutes>
    </BrowserRouter>
  );
}


