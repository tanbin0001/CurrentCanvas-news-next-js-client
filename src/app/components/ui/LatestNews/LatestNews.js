import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import topNews from "../../../../assets/top-news.png";
import Image from "next/image";

const LatestNews = () => {
  return (
    <Box>
      <Card>
        <CardActionArea>
          <CardMedia>
            <Image src={topNews} alt="top news" />
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default LatestNews;
