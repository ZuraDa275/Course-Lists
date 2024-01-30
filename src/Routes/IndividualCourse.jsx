import { useState } from "react";
import {
  Container,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  Collapse,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useParams } from "react-router-dom";
import { useFetch } from "../Hooks/useFetch";
import { apiLinks } from "../utils/api";
import { EnrollButton } from "../Components/EnrollButton";

export const IndividualCourse = () => {
  let { id } = useParams();
  const { getByID } = apiLinks;
  const [course, setCourse] = useState();
  const { error, loading } = useFetch(getByID(id), (data) => setCourse(data));
  const [syllabusOpen, setSyllabusOpen] = useState(false);
  const [checkEnroll, setCheckEnroll] = useState(false);

  const handleSyllabusToggle = () => {
    setSyllabusOpen(!syllabusOpen);
  };

  if (loading) return <>Loading...</>;
  if (error) return <>{error}</>;

  return (
    <Container maxWidth="md" style={{ marginTop: "20px", fontSize: "1.5em" }}>
      <Paper elevation={3} style={{ padding: "20px" }}>
        <Typography variant="h4" gutterBottom>
          {course.name}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Instructor: {course.instructor}
        </Typography>
        <Typography variant="body1" paragraph>
          {course.description}
        </Typography>
        <Typography variant="body2" gutterBottom>
          Enrollment Status: {course.enrollmentStatus}
        </Typography>
        <Typography variant="body2" gutterBottom>
          Duration: {course.duration}
        </Typography>
        <Typography variant="body2" gutterBottom>
          Schedule: {course.schedule}
        </Typography>
        <Typography variant="body2" gutterBottom>
          Location: {course.location}
        </Typography>
        <Typography variant="body2" gutterBottom>
          Pre-requisites: {course.prerequisites.join(", ")}
        </Typography>
        <Button onClick={handleSyllabusToggle} endIcon={<ExpandMoreIcon />}>
          Syllabus
        </Button>
        <Collapse in={syllabusOpen}>
          <List>
            {course.syllabus.map((item) => (
              <ListItem key={item.week}>
                <ListItemText
                  primary={`Week ${item.week}: ${item.topic}`}
                  secondary={item.content}
                />
              </ListItem>
            ))}
          </List>
        </Collapse>
      </Paper>
      <EnrollButton
        course={course}
        setCheckEnroll={(val) => setCheckEnroll(val)}
        checkEnroll={checkEnroll}
      />
    </Container>
  );
};
