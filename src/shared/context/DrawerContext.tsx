// Sharing context between themes

import React from "react";
import { createContext, useCallback, useContext, useState } from "react";

interface IDrawerContextData {
  isDrawerOpen: boolean;
  toggleDrawerOpen: () => void;
}

interface IAppDrawerProvideProps {
  children: React.ReactNode;
}

const DrawerContext = createContext({} as IDrawerContextData);

// Added customized hook.
// A function to return the IThemeContextData properties
// This will enable do use the toggle to change our Light or Dark mode.
export const useDrawerContext = () => {
  return useContext(DrawerContext);
};

export const AppDrawerProvider: React.FC<IAppDrawerProvideProps> = ({
  children,
}) => {
  const [isDrawerOpen, setisDrawerOpen] = useState(false);

  // store functions in react memory, and was update when var inside dependency array is updated
  const toggleDrawerOpen = useCallback(() => {
    setisDrawerOpen((oldDrawerOpen) => !oldDrawerOpen);
  }, []);

  return (
    <DrawerContext.Provider value={{ isDrawerOpen, toggleDrawerOpen }}>
      {children}
    </DrawerContext.Provider>
  );
};
