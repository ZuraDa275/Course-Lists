import { CourseList } from "./Routes/CourseList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { IndividualCourse } from "./Routes/IndividualCourse";
import { useFetch } from "./Hooks/useFetch";
import { UserDashboard } from "./Routes/UserDashboard";
import ResponsiveAppBar from "./Components/NavBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<CourseList />} />
          <Route path="/course/:id" element={<IndividualCourse />} />
          <Route path="/dashboard" element={<UserDashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
