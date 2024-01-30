import { Button, Grid } from "@mui/material";
import { useEnroll } from "../Hooks/useEnroll";
import { useDueDateCal } from "../Hooks/useDueDateCal";
import { useEffect } from "react";

export const EnrollButton = ({ course, setCheckEnroll, checkEnroll }) => {
  const { addCourse, findCourse } = useEnroll();
  const dueDateCalc = useDueDateCal();

  useEffect(() => {
    if (course) {
      setCheckEnroll(findCourse(course.id));
    }
  }, []);

  return (
    <Grid container justifyContent="center" style={{ marginTop: "20px" }}>
      {checkEnroll ? (
        <Button
          variant="outlined"
          style={{ color: "grey", borderColor: "grey" }}
          disabled
        >
          Enrolled
        </Button>
      ) : (
        <Button
          variant="outlined"
          style={{ color: "green", borderColor: "green" }}
          onClick={() => {
            setCheckEnroll(true);
            addCourse({
              id: course.id,
              name: course.name,
              instructor: course.instructor,
              thumbnail: course.thumbnail,
              dueDate: dueDateCalc(course.duration.match(/[0-9]+/g)),
              progress: 0,
              completed: false,
            });
          }}
        >
          Enroll
        </Button>
      )}
    </Grid>
  );
};
