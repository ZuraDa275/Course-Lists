import { useCourseContext } from "../CourseContext";

export const useEnroll = () => {
  const { setEnrolledCourses } = useCourseContext();

  let storedEnrolledCourses = [
    ...JSON.parse(localStorage.getItem("enrolledCourse")),
  ];
  storedEnrolledCourses = storedEnrolledCourses ?? [];

  return {
    addCourse: (newEnrolledCourse) => {
      localStorage.setItem(
        "enrolledCourse",
        JSON.stringify([...storedEnrolledCourses, newEnrolledCourse])
      );
      alert("Enrolled Successfully");
    },
    markCompleted: (enrolledCourseID) => {
      const updatedCourses = storedEnrolledCourses?.map((course) =>
        course.id === enrolledCourseID
          ? { ...course, completed: true, progress: 100 }
          : course
      );
      setEnrolledCourses(updatedCourses);
      localStorage.setItem("enrolledCourse", JSON.stringify(updatedCourses));
      alert("Completed Successfully!");
    },
    findCourse: function (enrolledCourseID) {
      const getCourse = storedEnrolledCourses?.find(
        (course) => course.id === enrolledCourseID
      );
      return getCourse ? true : false;
    },
    getCourse: () => setEnrolledCourses(storedEnrolledCourses),
  };
};
