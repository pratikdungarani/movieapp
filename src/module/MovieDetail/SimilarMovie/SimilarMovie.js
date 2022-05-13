import React, { useState, useEffect } from "react";
import { useSimilarMovieMutation } from "store/reducers/index";
import Moviecard from "common/MovieCard/MovieCard";
import { useParams } from "react-router-dom";
import { Box, Container, Grid, Typography } from "@mui/material";
import { MOVIE_IMG_URL } from "config/config";
import useStyles from "./style";

const SimilarMovie = () => {
  const classess = useStyles();
  const [getsimilar] = useSimilarMovieMutation();
  const [similarmovies, setSimilarMovies] = useState();
  let { id } = useParams();

  useEffect(() => {
    async function getMovieDetail() {
      // Get Similar Movie APi
      let similar = await getsimilar(id);
      setSimilarMovies(similar?.data);
    }
    getMovieDetail();
  }, [id]);

  return (
    <Container>
      <Box sx={{ mb: 2, mt: 2 }}>
        <Typography
          variant="h5"
          color="secondary.main"
          style={{ textTransform: "uppercase" }}
        >
          Similar Movies
        </Typography>
      </Box>
      <Grid container spacing={2} className={classess.listRow}>
        {similarmovies?.results.map((movie, i) => {
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
              />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default SimilarMovie;
