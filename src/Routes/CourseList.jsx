import { SearchBar } from "../Components/SearchBar";
import { CourseCard } from "../Components/CourseCard";
import { useFetch } from "../Hooks/useFetch";
import Filter from "../Components/Filter";
import { useCourseContext } from "../CourseContext";
import { apiLinks } from "../utils/api";
import { Container, Grid } from "@mui/material";

export const CourseList = () => {
  const { getAll } = apiLinks;
  const { courses, setCourses, setFilteredCourses } = useCourseContext();
  const { error, loading } = useFetch(getAll(), (data) => {
    setCourses(data);
    setFilteredCourses(data);
  });

  if (loading) return <>Loading...</>;
  if (error) return <>{error}</>;

  return (
    <>
      <SearchBar />
      <Filter />
      <Container maxWidth="md" style={{ marginTop: "20px" }}>
        <Grid container spacing={10}>
          {courses.map((course) => (
            <CourseCard course={course} key={course.id} />
          ))}
        </Grid>
      </Container>
    </>
  );
};
