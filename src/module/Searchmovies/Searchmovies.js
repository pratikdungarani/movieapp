import React, { useEffect, useState } from "react";
import Moviecard from "common/MovieCard/MovieCard";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useSearchMovieMutation } from "store/reducers/index";
import { MOVIE_IMG_URL } from "config/config";
import useStyles from "./style";
const Searchmovies = () => {
  const classes = useStyles();
  const [ListData] = useSearchMovieMutation();
  const [searchData, setSearchData] = useState([]);

  return (
    <Container>
      <Box sx={{ mb: 2, mt: 2 }}>
        <Typography
          variant="h5"
          color="secondary.main"
          style={{ textTransform: "uppercase" }}
        >
          {" "}
          Search Movies{" "}
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {searchData?.map((mov, i) => {
          return (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={i}
              className={classes.listRow}
            >
              <Moviecard
                id={mov?.id}
                title={mov?.title}
                release_date={mov?.release_date}
                lang={mov?.original_language}
                voteAverage={mov?.vote_average}
                overview={mov?.overview}
                posterPath={MOVIE_IMG_URL + mov?.poster_path}
              />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Searchmovies;
