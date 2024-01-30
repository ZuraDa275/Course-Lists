import React from "react";
import { TextField } from "@mui/material";
import { useCourseContext } from "../CourseContext";
import { debounce } from "../utils/debounce";

export const SearchBar = () => {
  const { filteredCourses, filterValue, setCourses } = useCourseContext();

  const handleSearch = debounce((event) => {
    let searchQuery = event.target.value;
    const newArr = filteredCourses.filter((course) =>
      course[filterValue].toLowerCase().includes(searchQuery.toLowerCase())
    );
    setCourses([...newArr]);
  }, 250);

  return (
    <TextField
      placeholder="Search Here..."
      onChange={handleSearch}
      fullWidth
      style={{ marginBottom: "15px" }}
    />
  );
};
