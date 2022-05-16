import React from "react";
import { InputLabel, TextField } from "@mui/material";
import useStyles from "./style";
import { ErrorMessage, useField } from "formik";
import TextError from "common/FormControls/TextError/TextError";

function CustomTextField({ type, label, placeholder, ...props }) {
  const classes = useStyles();
  const [field, meta] = useField(props);
  return (
    <React.Fragment>
      <InputLabel className={classes.inputLable}>{label}</InputLabel>
      <TextField
        className={classes.textField}
        type={type ? type : "text"}
        fullWidth
        {...field}
        {...props}
        FormHelperTextProps={{
          classes: {
            root: classes.helperText,
          },
        }}
        placeholder={placeholder}
      />
      <ErrorMessage component={TextError} name={field.name} />
    </React.Fragment>
  );
}

export default CustomTextField;
