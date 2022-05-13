import React from "react";
import { TextareaAutosize, InputLabel } from "@mui/material";
import useStyles from "./style";
import { ErrorMessage, useField } from "formik";

const Textarea = ({ label, placeholder, ...props }) => {
  const [field, meta] = useField(props);
  const classes = useStyles();

  return (
    <React.Fragment>
      <InputLabel className={classes.inputLable}>{label}</InputLabel>
      <TextareaAutosize
        minRows={3}
        placeholder={placeholder}
        {...field}
        {...props}
        style={{ width: "100%" }}
      />

      <ErrorMessage
        component="div"
        name={field.name}
        className="error"
        style={{ color: "#ff0000" }}
      />
    </React.Fragment>
  );
};

export default Textarea;
