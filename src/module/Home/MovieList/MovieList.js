import React from "react";
import Moviecard from "common/MovieCard/MovieCard";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useGetPopularMovieQuery } from "store/reducers/index";
import { useNavigate } from "react-router-dom";
import { MOVIE_IMG_URL } from "config/config";
import useStyles from "./style";

const MovieList = () => {
  const classes = useStyles();
  const movieslist = useGetPopularMovieQuery();
  const { data } = movieslist;
  const navigate = useNavigate();

  const cardClick = (id) => {
    navigate(`/${id}`);
  };
  return (
    <Container>
      <Box sx={{ mb: 2, mt: 2 }}>
        <Typography
          variant="h5"
          color="secondary.main"
          style={{ textTransform: "uppercase" }}
        >
          Popular Movies
        </Typography>
      </Box>
      <Grid container spacing={2} className={classes.listRow}>
        {data?.results.map((movie, i) => {
          return (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Moviecard
                key={movie.id}
                posterPath={MOVIE_IMG_URL + movie?.poster_path}
                overview={movie?.overview}
                originalTitle={movie?.original_title}
                voteAverage={movie?.vote_average}
                originalLanguage={movie?.original_language}
                id={movie.id}
                CardClick={cardClick}
              />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default MovieList;
