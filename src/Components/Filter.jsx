import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useCourseContext } from "../CourseContext";

export default function Filter() {
  const { filterValue, setFilterValue } = useCourseContext();
  const handleChange = (event) => {
    setFilterValue(event.target.value);
  };

  return (
    <FormControl fullWidth style={{ marginBottom: "15px" }}>
      <FormLabel id="demo-controlled-radio-buttons-group">Search By:</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={filterValue}
        onChange={handleChange}
        row
      >
        <FormControlLabel
          value="name"
          control={<Radio />}
          label="Course Name"
        />
        <FormControlLabel
          value="instructor"
          control={<Radio />}
          label="Instructor"
        />
      </RadioGroup>
    </FormControl>
  );
}
