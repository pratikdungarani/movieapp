import { makeStyles } from "@mui/styles";
import theme from "../../../assets/style/theme";

const useStyles = makeStyles(() => ({
  inputLabel: {
    "&.MuiInputLabel-root": {
      marginTop: theme.spacing(2),
      color: "#1a3353",
      fontWeight: theme.typography.fontWeightBold,
      fontSize: theme.typography.pxToRem(14),
    },
  },
  helperText: {
    "&.MuiFormHelperText-root": {
      lineHeight: 0.66,
      marginLeft: theme.spacing(0),
    },
  },

  labelAsterisk: {
    color: theme.error.main,
  },

  textField: {
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: theme.borderColor,
      borderRadius: 10,
    },

    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: theme.palette.primary.main,
    },
  },
}));

export default useStyles;
