import { useContext, createContext, useState } from "react";

const Course = createContext();

const CourseContext = ({ children }) => {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [filterValue, setFilterValue] = useState("name");
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  return (
    <Course.Provider
      value={{
        courses,
        setCourses,
        filteredCourses,
        setFilteredCourses,
        filterValue,
        setFilterValue,
        enrolledCourses,
        setEnrolledCourses,
      }}
    >
      {children}
    </Course.Provider>
  );
};

export default CourseContext;

export const useCourseContext = () => {
  return useContext(Course);
};
