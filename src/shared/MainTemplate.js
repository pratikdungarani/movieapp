import React from "react";
import { Box } from "@mui/material";
import Header from "common/Header/Header";
import { useGetPopularMovieQuery } from "store/reducers/index";
import useStyles from "./style";

const MainTemplate = ({ children }) => {
  const classes = useStyles();
  const movielist = useGetPopularMovieQuery();
  return (
    <Box className={classes.mainContent}>
      <Header movielist={movielist?.data} />
      <Box>{children}</Box>
    </Box>
  );
};

export default MainTemplate;
