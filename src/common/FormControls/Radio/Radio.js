import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Radio, FormLabel, RadioGroup, FormControl } from "@mui/material";
import { ErrorMessage, useField } from "formik";

const CustomRadio = ({ title, radioArr, ...props }) => {
  const [field, meta] = useField(props);
  const radioBox = radioArr.map((check, i) => {
    return (
      <React.Fragment key={i}>
        <FormControlLabel
          {...field}
          {...props}
          control={<Radio />}
          label={check.label}
        />
      </React.Fragment>
    );
  });

  return (
    <>
      <FormControl>
        <FormLabel id="demo-row-radio-buttons-group-label">{title}</FormLabel>
        <RadioGroup>{radioBox}</RadioGroup>
        <ErrorMessage
          component="div"
          name={field.name}
          className="error"
          style={{ color: "#ff0000" }}
        />
      </FormControl>
    </>
  );
};

export default CustomRadio;
