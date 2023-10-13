import React from "react";
import {
  Box,
  Button,
  Divider,
  Icon,
  Paper,
  Skeleton,
  useTheme,
} from "@mui/material";

interface IToolbarDetailsProps {
  textButtonNew?: string;

  showButtonNew?: boolean;
  showLoadingButtonNew?: boolean;

  showButtonBack?: boolean;
  showLoadingButtonBack?: boolean;

  showButtonDelete?: boolean;
  showLoadingButtonDelete?: boolean;

  showButtonSave?: boolean;
  showloadingButtonSave?: boolean;

  showButtonSaveAndBack?: boolean;
  showLoadingButtonSaveAndBack?: boolean;

  onClickButtonNew?: () => void;
  onClickButtonBack?: () => void;
  onClickButtonDelete?: () => void;
  onClickButtonSave?: () => void;
  onClickButtonSaveAndBack?: () => void;
}

export const ToolbarDetails: React.FC<IToolbarDetailsProps> = ({
  textButtonNew = "New",

  showButtonNew = true,
  showLoadingButtonNew = false,

  showButtonBack = true,
  showLoadingButtonBack = false,

  showButtonDelete = true,
  showLoadingButtonDelete = false,

  showButtonSave = true,
  showloadingButtonSave = false,

  showButtonSaveAndBack = false,
  showLoadingButtonSaveAndBack = false,

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
      {showloadingButtonSave && <Skeleton width={110} height={60} />}
      {showButtonSave && !showloadingButtonSave && (
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

      {showLoadingButtonSaveAndBack && <Skeleton width={180} height={60} />}
      {showButtonSaveAndBack && !showLoadingButtonSaveAndBack && (
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

      {showLoadingButtonDelete && <Skeleton width={110} height={60} />}
      {showButtonDelete && !showLoadingButtonDelete && (
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

      {showLoadingButtonNew && <Skeleton width={110} height={60} />}
      {showButtonNew && !showLoadingButtonNew && (
        <Button
          color="primary"
          disableElevation
          variant="outlined"
          onClick={onClickButtonNew}
          startIcon={<Icon>add</Icon>}
        >
          New
        </Button>
      )}
      <Divider variant="middle" orientation="vertical" />

      {showLoadingButtonBack && <Skeleton width={110} height={60} />}
      {showButtonBack && !showLoadingButtonBack && (
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
