import React from "react";
import { Box, Button, Divider, Icon, Paper, useTheme } from "@mui/material";

export const ToolbarDetails: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      gap={1}
      marginX={1}
      padding={1}
      paddingX={2}
      display={"flex"}
      alignItems={"center"}
      height={theme.spacing(5)}
      component={Paper}
    >
      <Button
        color="primary"
        disableElevation
        variant="outlined"
        startIcon={<Icon>add</Icon>}
      >
        New
      </Button>
      <Button
        color="primary"
        disableElevation
        variant="contained"
        startIcon={<Icon>check</Icon>}
      >
        Save
      </Button>
      <Button
        color="primary"
        disableElevation
        variant="outlined"
        startIcon={<Icon>check</Icon>}
      >
        Save and Back
      </Button>
      <Button
        color="primary"
        disableElevation
        variant="outlined"
        startIcon={<Icon>delete_outline</Icon>}
      >
        Delete
      </Button>
      <Button
        color="primary"
        disableElevation
        variant="outlined"
        startIcon={<Icon>add</Icon>}
      >
        New
      </Button>
      <Divider variant="middle" orientation="vertical" />
      <Button
        color="primary"
        disableElevation
        variant="outlined"
        startIcon={<Icon>arrow_back_ios</Icon>}
      >
        Back
      </Button>
    </Box>
  );
};
