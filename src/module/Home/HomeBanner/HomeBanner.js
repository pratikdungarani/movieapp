import React, { useState } from "react";
import { Box } from "@mui/material";
import { MOVIE_IMG_URL, YOUTUBE_URL } from "config/config";
import useStyle from "./style";
import {
  useNowPlayingMovieQuery,
  useVideoMovieMutation,
} from "store/reducers/index";
import Slider from "react-slick";
import Moviebanner from "./MovieBanner";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { DialogContainer } from "common/index";

const HomeBanner = () => {
  const slider = React.useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [videos, setVideos] = useState([]);
  const classes = useStyle();
  const nowPlaying = useNowPlayingMovieQuery();
  const [getvideo] = useVideoMovieMutation();
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  const prevSlide = () => {
    slider?.current?.slickPrev();
  };
  const nextSlide = () => {
    slider?.current?.slickNext();
  };

  const getVideoUrl = async (id) => {
    let data = await getvideo(id);
    await setVideos(data?.data?.results[0]);
    await setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      <Box className={classes.PositionRelative}>
        <Slider ref={slider} {...settings}>
          {nowPlaying?.data?.results?.slice(0, 5)?.map((mov, i) => {
            return (
              <Box
                key={i}
                sx={{
                  background: `#000 url(${
                    MOVIE_IMG_URL + mov?.backdrop_path
                  }) no-repeat center top`,
                  backgroundSize: "cover",
                }}
              >
                <Moviebanner
                  id={mov?.id}
                  title={mov?.title}
                  release_date={mov?.release_date}
                  lang={mov?.original_language}
                  vote_average={mov?.vote_average}
                  overview={mov?.overview}
                  posterPath={MOVIE_IMG_URL + mov?.poster_path}
                  getVideo={getVideoUrl}
                />
              </Box>
            );
          })}
        </Slider>
        {nowPlaying?.data?.results && (
          <Box className={classes.arrowButtonWrap}>
            <Box
              component="span"
              color="secondary.main"
              className={`${classes.nextprevBtn} ${classes.prevButton}`}
              onClick={() => prevSlide()}
            >
              <ArrowBackIosNewIcon />
            </Box>
            <Box
              component="span"
              color="secondary.main"
              className={`${classes.nextprevBtn} ${classes.nextButton}`}
              onClick={() => nextSlide()}
            >
              <ArrowForwardIosIcon />
            </Box>
          </Box>
        )}
      </Box>
      {isOpen && (
        <DialogContainer
          open={isOpen}
          handleClose={handleClose}
          video={YOUTUBE_URL + videos?.key}
          dialogSize="sm"
        />
      )}
    </>
  );
};

export default HomeBanner;
