import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  SearchInput: {
    background: theme.palette.primary.main,
    border: `1px solid ${theme.palette.neutral.main}`,
    padding: "13px 35px 13px 13px",
    color: theme.palette.secondary.main,
    borderRadius: "25px",
    "&::focus-visible": {
      outline: "none",
    },
  },
  searchAlignEnd: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  InputWrap: {
    position: "relative",
  },
  menu_link: {
    color: theme.palette.neutral.main,
    position: "relative",
    transition: "0.3s ease",
    padding: "7px 15px",
    marginLeft: "15px",
    borderRadius: "25px",
    textDecoration: "none",
    "&:hover": {
      background: theme.palette.secondary.main,
    },
    "&.active": {
      background: theme.palette.secondary.main,
    },
  },
  SearchIcon: {
    background: theme.palette.secondary.main,
    position: "absolute",
    right: "1px",
    top: "2px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "38px",
    height: "38px",
    borderRadius: "50%",
  },
  svgSearch: {
    color: theme.palette.neutral.main,
  },
}));

export default useStyles;
