import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Checkbox, InputLabel } from "@mui/material";
import { ErrorMessage, useField } from "formik";

const CustomCheckbox = ({ title, checkArr, ...props }) => {
  console.log("checkbox field====>", checkArr);
  const [field, meta] = useField(props);

  const ChecBox = checkArr.map((check, i) => {
    console.log("chk", check);
    return (
      <React.Fragment key={i}>
        <FormControlLabel
          control={<Checkbox value={check.id} {...field} {...props} />}
          label={check?.label}
        />
      </React.Fragment>
    );
  });

  return (
    <>
      <InputLabel>{title}</InputLabel>
      {ChecBox}
      <ErrorMessage
        component="div"
        name={field.name}
        className="error"
        style={{ color: "#ff0000" }}
      />
    </>
  );
};

export default CustomCheckbox;
