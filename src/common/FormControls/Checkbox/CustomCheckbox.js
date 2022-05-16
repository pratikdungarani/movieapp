import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "common/FormControls/TextError/TextError";
import { InputLabel } from "@mui/material";

function CustomCheckbox(props) {
  const { label, name, options, ...rest } = props;
  return (
    <div className="form-control">
      <InputLabel>{label}</InputLabel>
      <Field name={name}>
        {({ field }) => {
          return options.map((option) => {
            return (
              <React.Fragment key={option.key}>
                <input
                  type="checkbox"
                  id={option.value}
                  {...field}
                  {...rest}
                  value={option.value}
                  checked={field?.value?.includes(option?.value)}
                />
                <label htmlFor={option.value}>{option.value}</label>
              </React.Fragment>
            );
          });
        }}
      </Field>
      <ErrorMessage component={TextError} name={name} />
    </div>
  );
}

export default CustomCheckbox;
