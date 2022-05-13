import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  fieldWrap: {
    marginBottom: theme.spacing(2),
  },
  textField: {
    padding: "10px",
    width: "100%",
    border: `1px solid ${theme.borderColor}`,
  },
  TodoTitle: {
    "&.MuiTypography-root": {
      marginBottom: theme.spacing(2),
      fontSize: theme.typography.pxToRem(24),
    },
  },
  ListRow: {
    "&.MuiList-root": {
      padding: "0",
    },
  },
}));

export default useStyles;
