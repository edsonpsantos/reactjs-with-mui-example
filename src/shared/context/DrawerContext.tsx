// Sharing context between themes

import React from "react";
import { createContext, useCallback, useContext, useState } from "react";

interface IDrawerContextData {
  isDrawerOpen: boolean;
  drawerOptions: IDrawerOptions[];
  toggleDrawerOpen: () => void;
  setDrawerOptions: (newDrawerOptions: IDrawerOptions[]) => void;
}

interface IAppDrawerProvideProps {
  children: React.ReactNode;
}

interface IDrawerOptions {
  icon: string;
  label: string;
  path: string;
}

const DrawerContext = createContext({} as IDrawerContextData);

// Added customized hook.
// A function to return the IThemeContextData properties
// This will enable do use the toggle to change our Light or Dark mode.
export const useDrawerContext = () => {
  return useContext(DrawerContext);
};

export const DrawerProvider: React.FC<IAppDrawerProvideProps> = ({
  children,
}) => {
  const [isDrawerOpen, setisDrawerOpen] = useState(false);
  const [drawerOptions, setDrawerOptions] = useState<IDrawerOptions[]>([]);

  // store functions in react memory, and was update when var inside dependency array is updated
  const toggleDrawerOpen = useCallback(() => {
    setisDrawerOpen((oldDrawerOpen) => !oldDrawerOpen);
  }, []);

  //Generic: Possible to set item at menu list
  const handleSetDrawerOptions = useCallback(
    (newDrawerOptions: IDrawerOptions[]) => {
      setDrawerOptions(newDrawerOptions);
    },
    []
  );

  return (
    <DrawerContext.Provider
      value={{
        isDrawerOpen,
        drawerOptions,
        toggleDrawerOpen,
        setDrawerOptions: handleSetDrawerOptions,
      }}
    >
      {children}
    </DrawerContext.Provider>
  );
};
