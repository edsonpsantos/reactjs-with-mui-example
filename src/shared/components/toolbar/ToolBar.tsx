import React from "react";
import { Box, Button, Icon, Paper, TextField, useTheme } from "@mui/material";

interface IToolBarProps {
  textSearch?: string;
  showInputSearch?: boolean;
  onChangeSearchText?: (newText: string) => void;

  textButtonNew?: string;
  showButtonNew?: boolean;
  onClickButtonNew?: () => void;
}

export const ToolBar: React.FC<IToolBarProps> = ({
  textSearch = "",
  showInputSearch = false,
  onChangeSearchText,

  textButtonNew = "New",
  showButtonNew = "true",
  onClickButtonNew,
}) => {
  const theme = useTheme();
  return (
    // Box now inherits properties of Papper MUI component
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
      {showInputSearch && (
        <TextField
          size="small"
          placeholder="Search..."
          value={textSearch}
          onChange={(e) => onChangeSearchText?.(e.target.value)}
        />
      )}
      <Box flex={1} display={"flex"} justifyContent={"end"}>
        {showButtonNew && (
          <Button
            variant="contained"
            color="primary"
            disableElevation
            endIcon={<Icon>add</Icon>}
            onClick={onClickButtonNew}
          >
            {textButtonNew}
          </Button>
        )}
      </Box>
    </Box>
  );
};
