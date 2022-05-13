import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  ListRow: {
    border: `1px solid ${theme.palette.neutral.main}`,
    marginBottom: theme.spacing(1),
  },
  ListText: {
    color: theme.palette.neutral.main,
  },
  DeleteButton: {
    color: theme.palette.neutral.main,
  },
}));

export default useStyles;
