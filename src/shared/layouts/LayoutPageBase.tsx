import React, { ReactNode } from "react";
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
  children: ReactNode;
  title: string;
  toolbar: ReactNode | undefined;
}

export const LayoutPageBase: React.FC<ILayoutPageBaseProps> = ({
  children,
  title,
  toolbar,
}) => {
  const theme = useTheme();
  const smDom = useMediaQuery(theme.breakpoints.down("sm"));
  const mdDom = useMediaQuery(theme.breakpoints.down("md"));
  const { toggleDrawerOpen } = useDrawerContext();

  return (
    <Box height={"100%"} display={"flex"} flexDirection={"column"} gap={1}>
      <Box
        display={"flex"}
        alignItems={"center"}
        padding={1}
        height={theme.spacing(smDom ? 6 : mdDom ? 8 : 12)}
        gap={1}
      >
        {smDom && (
          <IconButton onClick={toggleDrawerOpen}>
            <Icon>menu</Icon>
          </IconButton>
        )}

        {/*
          overflow={ 'hidden' } - cut the text in the end of the page
          textOverflow={"ellipsis"} add ... in the end of the text
        */}
        <Typography
          variant={smDom ? "h5" : mdDom ? "h4" : "h3"}
          whiteSpace={"nowrap"}
          overflow={"hidden"}
          textOverflow={"ellipsis"}
        >
          {title}
        </Typography>
      </Box>

      {toolbar && (
        <Box>
          <Typography>{toolbar}</Typography>
        </Box>
      )}

      {/* overflow={'auto'}
      Incluing scroll only inside this box */}
      <Box flex={1} overflow={"auto"}>
        {children}
      </Box>
    </Box>
  );
};
