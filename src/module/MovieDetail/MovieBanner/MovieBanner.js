import React, { useEffect, useState } from "react";
import { Box, Container, Grid, Typography, Chip } from "@mui/material";
import { MOVIE_IMG_URL } from "config/config";
import Rating from "@mui/material/Rating";
import useStyle from "./style";
import CastCard from "common/CastCard/CastCard";
import Slider from "react-slick";
import { useParams } from "react-router-dom";

import {
  useMovieDetailMutation,
  useMovieStarCastMutation,
} from "store/reducers/index";

const MovieBanner = () => {
  const slider = React.useRef(null);
  const classes = useStyle();
  let { id } = useParams();
  const [getstarcast] = useMovieStarCastMutation();
  const [getdetail] = useMovieDetailMutation();
  const [moviedetail, setMovieDetail] = useState();
  const [starccast, setStarcast] = useState();

  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
  };

  const getMovieDetail = async () => {
    // Get Movie Detail API
    let data = await getdetail(id);
    setMovieDetail(data?.data);

    // Get Star cast
    let starcast = await getstarcast(id);
    setStarcast(starcast?.data);
  };

  useEffect(() => {
    getMovieDetail();
  }, [id]);

  return (
    <Box
      className={classes.bgcover}
      sx={{
        background: `#000 url(${
          MOVIE_IMG_URL + moviedetail?.backdrop_path
        }) no-repeat center top`,
        backgroundSize: "cover",
      }}
    >
      <Box className={classes.overlay}>
        <Container>
          <Grid container spacing={2}>
            <Grid item sm={4}>
              <Box>
                <img src={MOVIE_IMG_URL + moviedetail?.poster_path} />
              </Box>
            </Grid>
            <Grid item sm={8}>
              <Box sx={{ mb: 1 }}>
                <Typography variant="h3" color="neutral.main">
                  {moviedetail?.title}
                </Typography>
              </Box>
              <Box sx={{ mb: 2 }}>
                <Typography variant="p" color="neutral.main">
                  Release Date : {moviedetail?.release_date}
                </Typography>
              </Box>
              <Box sx={{ mb: 2 }}>
                <Typography variant="p" color="neutral.main">
                  Run Time: {moviedetail?.runtime} Min
                </Typography>
              </Box>
              <Box className={classes.flex_center}>
                <Rating
                  name="read-only"
                  defaultValue={4.2}
                  precision={moviedetail?.vote_average}
                  readOnly
                  max={1}
                />
                <Typography
                  variant="p"
                  sx={{ fontSize: "14px" }}
                  color="neutral.main"
                >
                  {moviedetail?.vote_average}
                </Typography>
              </Box>
              <Box sx={{ mb: 2 }}>
                <Typography variant="span" color="neutral.main">
                  Genres :
                </Typography>
                {moviedetail?.genres.map((gen, i) => (
                  <Chip
                    key={i}
                    sx={{ mx: 0.5 }}
                    color="secondary"
                    label={gen?.name}
                    variant="outlined"
                  />
                ))}
              </Box>
              <Box sx={{ mb: 2 }}>
                <Typography
                  variant="h5"
                  color="neutral.main"
                  sx={{
                    mb: 2,
                    borderBottom: 1,
                    borderColor: "neutral.darklight",
                  }}
                >
                  Overview
                </Typography>
                <Typography variant="p" color="neutral.main">
                  {moviedetail?.overview}
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="h5"
                  color="neutral.main"
                  sx={{
                    mb: 2,
                    borderBottom: 1,
                    borderColor: "neutral.darklight",
                  }}
                >
                  Cast
                </Typography>
                <Slider ref={slider} {...settings}>
                  {starccast?.cast?.map((cast, i) => {
                    return (
                      <Box sx={{ px: 1 }} key={i}>
                        <CastCard
                          profilePath={MOVIE_IMG_URL + cast?.profile_path}
                          name={cast?.name}
                        />
                      </Box>
                    );
                  })}
                </Slider>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default MovieBanner;
