import React from "react";
import {
  Container,
  Box,
  Grid,
  Typography,
  Button,
  Rating,
} from "@mui/material";
import useStyle from "./style";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

const Moviebanner = ({
  id,
  title,
  release_date,
  lang,
  vote_average,
  overview,
  getVideo,
  posterPath,
}) => {
  const classes = useStyle();

  return (
    <Box className={classes.overlay}>
      <Container>
        <Grid container spacing={2}>
          <Grid item sm={8}>
            <Box sx={{ mb: 1 }}>
              <Typography variant="h3" color="neutral.main">
                {title}
              </Typography>
            </Box>
            <Box sx={{ mb: 2 }}>
              <Typography variant="p" color="neutral.main">
                Release Date : {release_date}
              </Typography>
            </Box>
            <Box sx={{ mb: 2 }}>
              <Typography variant="p" color="neutral.main">
                Language : {lang}
              </Typography>
            </Box>

            <Box className={classes.ratingWrap}>
              <Typography
                variant="p"
                sx={{ fontSize: "14px" }}
                color="neutral.main"
              >
                Rating :
              </Typography>
              <Rating
                name="read-only"
                defaultValue={4.2}
                precision={vote_average}
                readOnly
                max={1}
              />
              <Typography
                variant="p"
                sx={{ fontSize: "14px" }}
                color="neutral.main"
              >
                {vote_average}
              </Typography>
            </Box>

            <Box sx={{ mb: 4 }}>
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
                {overview}
              </Typography>
            </Box>

            <Box>
              <Button
                onClick={() => getVideo(id)}
                className={classes.playBtn}
                variant="outlined"
                startIcon={<PlayCircleOutlineIcon size="large" />}
              >
                Play Movie
              </Button>
            </Box>
          </Grid>
          <Grid item sm={4}>
            <Box>
              <img src={posterPath} alt="poster" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Moviebanner;
