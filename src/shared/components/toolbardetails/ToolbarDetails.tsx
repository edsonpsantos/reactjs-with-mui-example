import React from "react";
import { Box, Button, Divider, Icon, Paper, useTheme } from "@mui/material";

interface IToolbarDetailsProps {
  textButtonNew?: string;

  showButtonNew?: boolean;
  showButtonBack?: boolean;
  showButtonDelete?: boolean;
  showButtonSave?: boolean;
  showButtonSaveAndBack?: boolean;

  onClickButtonNew?: () => void;
  onClickButtonBack?: () => void;
  onClickButtonDelete?: () => void;
  onClickButtonSave?: () => void;
  onClickButtonSaveAndBack?: () => void;
}

export const ToolbarDetails: React.FC<IToolbarDetailsProps> = ({
  textButtonNew = "New",
  showButtonNew = true,
  showButtonBack = true,
  showButtonDelete = true,
  showButtonSave = true,
  showButtonSaveAndBack = false,
  onClickButtonNew,
  onClickButtonBack,
  onClickButtonDelete,
  onClickButtonSave,
  onClickButtonSaveAndBack,
}) => {
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
      {showButtonNew && (
        <Button
          color="primary"
          disableElevation
          variant="outlined"
          onClick={onClickButtonNew}
          startIcon={<Icon>add</Icon>}
        >
          {textButtonNew}
        </Button>
      )}
      {showButtonSave && (
        <Button
          color="primary"
          disableElevation
          variant="contained"
          onClick={onClickButtonSave}
          startIcon={<Icon>check</Icon>}
        >
          Save
        </Button>
      )}
      {showButtonSaveAndBack && (
        <Button
          color="primary"
          disableElevation
          variant="outlined"
          onClick={onClickButtonSaveAndBack}
          startIcon={<Icon>check</Icon>}
        >
          Save and Back
        </Button>
      )}
      {showButtonDelete && (
        <Button
          color="primary"
          disableElevation
          variant="outlined"
          onClick={onClickButtonDelete}
          startIcon={<Icon>delete_outline</Icon>}
        >
          Delete
        </Button>
      )}

      <Divider variant="middle" orientation="vertical" />
      {showButtonBack && (
        <Button
          color="primary"
          disableElevation
          variant="outlined"
          onClick={onClickButtonBack}
          startIcon={<Icon>arrow_back_ios</Icon>}
        >
          Back
        </Button>
      )}
    </Box>
  );
};
