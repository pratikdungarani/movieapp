import React from "react";

//material UI
import { InputLabel, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { ErrorMessage, useField, useFormikContext } from "formik";

const DateTimePicker = ({ label, value, handleDateChange, ...props }) => {
  const [field, meta] = useField(props);
  const { setFieldValue } = useFormikContext();
  return (
    <>
      <InputLabel>{label}</InputLabel>
      <LocalizationProvider
        dateAdapter={AdapterDateFns}
        style={{ width: "100%" }}
      >
        <DatePicker
          style={{ width: "100%" }}
          {...field}
          {...props}
          onChange={(val) => {
            setFieldValue(field.name, val);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      <ErrorMessage
        component="div"
        name={field.name}
        className="error"
        style={{ color: "#ff0000" }}
      />
    </>
  );
};

export default DateTimePicker;
