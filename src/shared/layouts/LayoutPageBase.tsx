import React from "react";
import { Box } from "@mui/system";
import {
  Icon,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useDrawerContext } from "../context";

interface ILayoutPageBaseProps {
  children: React.ReactNode;
  title: string;
}

export const LayoutPageBase: React.FC<ILayoutPageBaseProps> = ({
  children,
  title,
}) => {
  const theme = useTheme();
  const smDom = useMediaQuery(theme.breakpoints.down("sm"));
  const {toggleDrawerOpen} = useDrawerContext()

  return (
    <Box height={"100%"} display={"flex"} flexDirection={"column"} gap={1}>
      <Box
        display={"flex"}
        alignItems={"center"}
        padding={1}
        height={theme.spacing(12)}
        gap={1}
      >
        {smDom && (
          <IconButton onClick={toggleDrawerOpen}>
            <Icon>menu</Icon>
          </IconButton>
        )}
        <Typography variant="h5">{title}</Typography>
      </Box>

      <Box>
        <Typography>Toolbar</Typography>
      </Box>

      <Box>{children}</Box>
    </Box>
  );
};
