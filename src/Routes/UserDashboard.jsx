import { useEffect } from "react";
import {
  Container,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  LinearProgress,
  IconButton,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useEnroll } from "../Hooks/useEnroll";
import { useCourseContext } from "../CourseContext";

export const UserDashboard = () => {
  const { enrolledCourses } = useCourseContext();
  const { markCompleted, getCourse } = useEnroll();

  useEffect(() => {
    getCourse();
  }, []);

  return (
    <Container maxWidth="md" style={{ marginTop: "20px" }}>
      <Paper elevation={3} style={{ padding: "20px" }}>
        <Typography variant="h4" gutterBottom>
          Your Enrolled Courses
        </Typography>
        <List>
          {enrolledCourses?.length > 0 ? (
            enrolledCourses.map((course) => (
              <ListItem key={course.id} style={{ marginBottom: "20px" }}>
                <ListItemAvatar>
                  <Avatar alt={course.name} src={course.thumbnail} />
                </ListItemAvatar>
                <ListItemText
                  primary={course.name}
                  secondary={
                    <>
                      <Typography variant="subtitle2">{`Instructor: ${course.instructor}`}</Typography>
                      <Typography variant="body2">{`Due Date: ${course.dueDate}`}</Typography>
                    </>
                  }
                />
                <LinearProgress
                  variant="determinate"
                  value={course.progress}
                  style={{ flexGrow: 1, marginRight: "10px" }}
                />
                <IconButton
                  onClick={() => {
                    markCompleted(course.id);
                  }}
                  disabled={course.completed}
                >
                  <CheckCircleOutlineIcon
                    color={course.completed ? "primary" : "disabled"}
                  />
                </IconButton>
              </ListItem>
            ))
          ) : (
            <h4>No courses enrolled</h4>
          )}
        </List>
      </Paper>
    </Container>
  );
};
