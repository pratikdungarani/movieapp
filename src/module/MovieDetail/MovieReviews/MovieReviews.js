import React, { useState, useEffect } from "react";
import { Container, Typography, Box } from "@mui/material";
import { useMovieReviewsMutation } from "store/reducers/index";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import useStyle from "./style";
import ReviewCard from "common/ReviewCard/ReviewCard";
import { MOVIE_IMG_URL } from "config/config";
import moment from "moment";

const MovieReviews = () => {
  const slider = React.useRef(null);
  const classes = useStyle();
  const [getreviews] = useMovieReviewsMutation();
  const [allreviews, setAllreviews] = useState([]);
  let { id } = useParams();
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: true,
  };

  const getMovieDetail = async () => {
    let allreviews = await getreviews(id);
    setAllreviews(allreviews?.data);
  };

  useEffect(() => {
    getMovieDetail();
  }, [id]);

  const PrevSlide = () => {
    slider?.current?.slickPrev();
  };
  const NextSlide = () => {
    slider?.current?.slickNext();
  };

  const getAvatar = (avatar) => {
    let avatar_url;
    if (avatar.includes("https://")) {
      return (avatar_url = avatar.substring("1"));
    } else {
      return (avatar_url = MOVIE_IMG_URL + avatar);
    }
  };

  return (
    <Container>
      <Box sx={{ mb: 2 }}>
        <Typography variant="h5" color="secondary.main">
          Movie Reviews
        </Typography>
      </Box>
      <Box sx={{ pb: 3 }}>
        <Slider ref={slider} {...settings}>
          {allreviews?.results?.map((review, i) => {
            let getav = getAvatar(review?.author_details?.avatar_path);
            return (
              <ReviewCard
                key={i}
                avatar={getav}
                author={review?.author}
                username={review?.author_details?.username}
                content={review?.content}
                updatedAt={moment(review?.updated_at).format("DD/MM/YY hA")}
              />
            );
          })}
        </Slider>
        <Box
          sx={{
            my: 4,
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            component="span"
            color="secondary.main"
            className={`${classes.nextprev} ${classes.prev}`}
            sx={{
              border: 1,
              borderColor: "secondary.main",
              borderRadius: "50%",
            }}
            onClick={() => PrevSlide()}
          >
            <ArrowBackIosNewIcon />
          </Box>
          <Box
            component="span"
            color="secondary.main"
            className={`${classes.nextprev} ${classes.next}`}
            sx={{
              border: 1,
              borderColor: "secondary.main",
              borderRadius: "50%",
            }}
            onClick={() => NextSlide()}
          >
            <ArrowForwardIosIcon />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default MovieReviews;
