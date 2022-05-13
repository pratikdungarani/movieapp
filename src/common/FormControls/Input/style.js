import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  inputLable: {
    "&.MuiInputLabel-root": {},
  },
  textField: {
    marginBottom: theme.spacing(4),
  },
}));

export default useStyles;
