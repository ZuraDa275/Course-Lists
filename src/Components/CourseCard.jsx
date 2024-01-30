import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Grid,
  IconButton,
  debounce,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { useState } from "react";
import { apiLinks } from "../utils/api";

export const CourseCard = ({ course }) => {
  const { getByID } = apiLinks;
  const [likes, setLikes] = useState(course.likes || 0);
  const [liked, setLiked] = useState(false);
  let navigate = useNavigate();

  const updateLikes = debounce(async () => {
    if (!liked) {
      setLikes(likes + 1);
      setLiked(true);
      try {
        const res = await fetch(getByID(course.id), {
          method: "PUT",
          headers: {
            "content-type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({ likes: likes + 1 }),
        });
        const data = await res.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
  }, 500);

  return (
    <Grid key={course.id} item xs={12} sm={6} md={4}>
      <Card>
        <CardMedia
          component="img"
          alt={course.name}
          height="140"
          style={{ cursor: "pointer" }}
          onClick={() => navigate(`/course/${course.id}`)}
          image={course.thumbnail}
        />
        <CardContent>
          <Typography variant="h6" component="div">
            {course.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Instructor: {course.instructor}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Duration: {course.duration}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Likes: {likes}
            <IconButton onClick={updateLikes} color="primary" disabled={liked}>
              <ThumbUpIcon />
            </IconButton>
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};
