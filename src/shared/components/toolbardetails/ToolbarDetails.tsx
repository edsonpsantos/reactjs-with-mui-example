import React from "react";
import {
  Box,
  Button,
  Divider,
  Icon,
  IconButton,
  Paper,
  Skeleton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import {
  ArrowBackIosNewOutlined,
  DeleteOutlineOutlined,
  SaveOutlined,
} from "@mui/icons-material";

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
  const smDom = useMediaQuery(theme.breakpoints.down("sm"));
  const mdDom = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      gap={1}
      marginX={1}
      padding={1}
      paddingX={4}
      display={"flex"}
      justifyContent={smDom ? "space-between" : ""}
      alignItems={"center"}
      height={theme.spacing(5)}
      component={Paper}
    >
      {showloadingButtonSave && <Skeleton width={110} height={60} />}
      {showButtonSave &&
        !showloadingButtonSave &&
        (smDom ? (
          <IconButton size="large" color="primary" onClick={onClickButtonSave}>
            <SaveOutlined fontSize="medium"></SaveOutlined>
          </IconButton>
        ) : (
          <Button
            color="primary"
            disableElevation
            variant="contained"
            onClick={onClickButtonSave}
            startIcon={<Icon>save_outlined</Icon>}
          >
            <Typography
              variant="button"
              whiteSpace={"nowrap"}
              textOverflow={"ellipsis"}
              overflow={"hidden"}
            >
              Save
            </Typography>
          </Button>
        ))}

      {showLoadingButtonSaveAndBack && !smDom && !mdDom && (
        <Skeleton width={180} height={60} />
      )}
      {showButtonSaveAndBack &&
        !showLoadingButtonSaveAndBack &&
        !smDom &&
        !mdDom && (
          <Button
            color="primary"
            disableElevation
            variant="outlined"
            onClick={onClickButtonSaveAndBack}
            startIcon={<Icon>saveoutlined</Icon>}
          >
            <Typography
              variant="button"
              whiteSpace={"nowrap"}
              textOverflow={"ellipsis"}
              overflow={"hidden"}
            >
              Save and Back
            </Typography>
          </Button>
        )}

      {showLoadingButtonDelete && <Skeleton width={110} height={60} />}
      {showButtonDelete &&
        !showLoadingButtonDelete &&
        (smDom ? (
          <IconButton size="large" color="primary" onClick={onClickButtonSave}>
            <DeleteOutlineOutlined fontSize="medium"></DeleteOutlineOutlined>
          </IconButton>
        ) : (
          <Button
            color="primary"
            disableElevation
            variant="outlined"
            onClick={onClickButtonDelete}
            startIcon={<Icon>delete_outline</Icon>}
          >
            Delete
          </Button>
        ))}

      {showLoadingButtonNew && !smDom && <Skeleton width={110} height={60} />}
      {showButtonNew &&
        !showLoadingButtonNew &&
        (smDom ? (
          <IconButton size="large" color="primary" onClick={onClickButtonSave}>
            <AddIcon fontSize="medium"></AddIcon>
          </IconButton>
        ) : (
          <Button
            color="primary"
            disableElevation
            variant="outlined"
            onClick={onClickButtonNew}
            endIcon={<Icon>add</Icon>}
          >
            <Typography
              variant="button"
              whiteSpace={"nowrap"}
              textOverflow={"ellipsis"}
              overflow={"hidden"}
            >
              New
            </Typography>
          </Button>
        ))}

      {showButtonBack &&
        (showButtonNew ||
          showButtonDelete ||
          showButtonSave ||
          showButtonSaveAndBack) && (
          <Divider variant="middle" orientation="vertical" />
        )}
      {showLoadingButtonBack && <Skeleton width={110} height={60} />}
      {showButtonBack &&
        !showLoadingButtonBack &&
        (smDom ? (
          <IconButton size="medium" color="primary" onClick={onClickButtonSave}>
            <ArrowBackIosNewOutlined fontSize="medium"></ArrowBackIosNewOutlined>
          </IconButton>
        ) : (
          <Button
            color="primary"
            disableElevation
            variant="outlined"
            onClick={onClickButtonBack}
            startIcon={<Icon>arrow_back_ios</Icon>}
          >
            <Typography
              variant="button"
              whiteSpace={"nowrap"}
              textOverflow={"ellipsis"}
              overflow={"hidden"}
            >
              Back
            </Typography>
          </Button>
        ))}
    </Box>
  );
};
