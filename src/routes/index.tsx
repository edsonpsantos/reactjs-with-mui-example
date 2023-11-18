import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { useDrawerContext } from "../shared/context";
import { PeopleList, Dashboard, PeopleDetails } from "../pages";

export const AppRoutes = () => {
  const { setDrawerOptions } = useDrawerContext();

  useEffect(() => {
    setDrawerOptions([
      {
        label: "Home",
        icon: "home",
        path: "/home",
      },
      {
        label: "People",
        icon: "people",
        path: "/people",
      },
      {
        label: "Cities",
        icon: "location_city",
        path: "/cities",
      },
    ]);
  }, []);

  return (
    <Routes>
      <Route path="/home" element={<Dashboard />} />
      <Route path="/people" element={<PeopleList />} />
      <Route path="/people/details/:id" element={<PeopleDetails />} />
      {/* <Route path="/cities" element={<CityList />} /> */}
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
};
