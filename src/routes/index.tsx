import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { useDrawerContext } from "../shared/context";
import { Dashboard } from "../pages";

export const AppRoutes = () => {
  const { setDrawerOptions } = useDrawerContext();


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
          <Dashboard />
        }
      />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
};
