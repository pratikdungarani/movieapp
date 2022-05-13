import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  inputLable: {
    "&.MuiInputLabel-root": {},
  },
  textField: {
    "& .MuiOutlinedInput-root": {
      color: theme.palette.neutral.main,
      // - The Input-root, inside the TextField-root
      "& fieldset": {
        // - The <fieldset> inside the Input-root
        borderColor: "#fff", // - Set the Input border
      },
      "&:hover fieldset": {
        borderColor: "#fff", // - Set the Input border when parent has :hover
      },
      "&.Mui-focused fieldset": {
        // - Set the Input border when parent is focused
        borderColor: "#fff",
      },
    },
  },
}));

export default useStyles;
