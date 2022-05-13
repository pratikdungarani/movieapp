import React from "react";
import { Box, Card } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const CastCard = ({ profilePath, name }) => {
  return (
    <>
      <Card>
        <CardActionArea>
          {profilePath && (
            <CardMedia
              component="img"
              height="140"
              image={profilePath}
              alt={name}
            />
          )}
        </CardActionArea>
      </Card>
      <Box sx={{ p: 1 }}>
        <Typography gutterBottom variant="p" color="neutral.main">
          {name}
        </Typography>
      </Box>
    </>
  );
};

export default CastCard;
