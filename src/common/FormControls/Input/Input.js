import React from "react";
import { InputLabel, TextField } from "@mui/material";
import useStyles from "./style";
import { ErrorMessage, useField } from "formik";

function CustomTextField({ label, placeholder, ...props }) {
  const classes = useStyles();
  const [field, meta] = useField(props);
  return (
    <React.Fragment>
      <InputLabel className={classes.inputLable}>{label}</InputLabel>
      <TextField
        className={classes.textField}
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
      <ErrorMessage
        component="div"
        name={field.name}
        className="error"
        style={{ color: "#ff0000" }}
      />
    </React.Fragment>
  );
}

export default CustomTextField;
