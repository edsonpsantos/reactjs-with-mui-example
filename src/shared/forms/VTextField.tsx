import React, { useEffect, useState } from "react";
import { useField } from "@unform/core";
import { TextField, TextFieldProps } from "@mui/material";
import { stringify } from "querystring";

type TVTextFieldProps = TextFieldProps & {
  name: string;
};

export const VTextField: React.FC<TVTextFieldProps> = ({ name, ...rest }) => {
  const { fieldName, registerField, defaultValue, error, clearError } =
    useField(name);

  const [value, setValue] = useState(defaultValue || "");

  useEffect(() => {
    registerField({
      name: fieldName,
      getValue: () => value,
      setValue: (_, newValue) => setValue(newValue),
    });
  }, [registerField, fieldName, value]);

  return (
    <TextField
      {...rest}
      defaultValue={defaultValue}
      error={!!error}
      helperText={error}
      value={value}
      onKeyDown={() => (error ? clearError() : undefined)}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
