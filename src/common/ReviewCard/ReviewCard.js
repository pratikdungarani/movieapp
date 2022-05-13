import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, Avatar, Grid, CardHeader } from "@mui/material";

const ReviewCard = ({ avatar, username, content, updatedAt }) => {
  return (
    <Card>
      <CardHeader
        avatar={<Avatar aria-label="recipe" src={avatar}></Avatar>}
        title={username}
        subheader={updatedAt}
      />
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="p" component="div">
            {content}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ReviewCard;
