import React from "react";
import CustomTextField from "./../Input/Input";
import TextArea from "./../Textarea/Textarea";
import Select from "./../Select/Select";
import RadioButtons from "./../Radio/Radio";
import CheckBoxes from "./../Checkbox/CustomCheckbox";
import DatePicker from "./../DatePicker/DatePicker";

function FormikController(props) {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <CustomTextField {...rest} />;
    case "textArea":
      return <TextArea {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "radio":
      return <RadioButtons {...rest} />;
    case "checkbox":
      return <CheckBoxes {...rest} />;
    case "date":
      return <DatePicker {...rest} />;
    default:
      return null;
  }
}
export default FormikController;
