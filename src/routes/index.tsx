import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Button, Icon } from "@mui/material";

import { useDrawerContext } from "../shared/context";

export const AppRoutes = () => {
  const { toggleDrawerOpen, setDrawerOptions } = useDrawerContext();


  useEffect(() => {
    setDrawerOptions([
      {
        label:'Home',
        icon: 'home',
        path: '/home'
      },
    ]);
  }, []);

  return (
    <Routes>
      <Route
        path="/home"
        element={
          <Button
            variant="contained"
            color="primary"
            onClick={toggleDrawerOpen}
          >
            <Icon>dehaze</Icon>
          </Button>
        }
      />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
};
