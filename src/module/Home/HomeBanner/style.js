import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  overlay: {
    background: "rgba(0,0,0,0.7)",
    padding: "100px 0",
  },
  PositionRelative: {
    position: "relative",
  },
  playBtn: {
    "&.MuiButton-root": {
      border: `1px solid ${theme.palette.secondary.main}`,
      color: theme.palette.neutral.main,
      "&:hover": {
        border: `1px solid ${theme.palette.neutral.main}`,
        color: theme.palette.secondary.main,
      },
    },
  },
  nextprevBtn: {
    width: "50px",
    height: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    margin: "0 5px",
    transition: "0.3s ease",
    position: "relative",
    border: `1px solid ${theme.palette.secondary.main}`,
    borderColor: theme.palette.secondary.main,
    borderRadius: "50%",
  },
  arrowButtonWrap: {
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: theme.spacing(4, 0),
  },
  prevButton: {
    "&:hover": {
      transform: "translateX(-10px)",
      background: theme.palette.neutral.main,
    },
  },
  ratingWrap: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(2),
  },
  nextButton: {
    "&:hover": {
      transform: "translateX(10px)",
      background: theme.palette.neutral.main,
    },
  },
}));

export default useStyles;
