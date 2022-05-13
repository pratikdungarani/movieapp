import React from "react";
import { InputLabel, Select, MenuItem } from "@mui/material";
import useStyles from "./style";
import { ErrorMessage, useField } from "formik";

const CustomSelect = ({ label, selectArray, ...props }) => {
  const classes = useStyles();
  const [field, meta] = useField(props);
  const getOptions = selectArray?.map((item, i) => {
    return (
      <MenuItem key={i} value={item}>
        {item}
      </MenuItem>
    );
  });

  return (
    <React.Fragment>
      <InputLabel id="label" className={classes.inputLable}>
        {label}
      </InputLabel>
      <Select fullWidth className={classes.textField} {...field} {...props}>
        {getOptions}
      </Select>

      <ErrorMessage
        component="div"
        name={field.name}
        className="error"
        style={{ color: "#ff0000" }}
      />
    </React.Fragment>
  );
};

export default CustomSelect;
