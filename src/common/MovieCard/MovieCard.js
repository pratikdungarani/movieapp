import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Rating from "@mui/material/Rating";

const Moviecard = ({
  posterPath,
  overview,
  originalTitle,
  voteAverage,
  originalLanguage,
  id,
  CardClick,
}) => {
  return (
    <Card onClick={() => CardClick && CardClick(id)}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={posterPath}
          alt={originalTitle}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {originalTitle}
          </Typography>
          <Typography gutterBottom variant="p" component="div">
            <b>Language : </b> {originalLanguage}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {overview}
          </Typography>
          <Rating name="read-only" value={voteAverage} readOnly max={10} />
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Moviecard;
