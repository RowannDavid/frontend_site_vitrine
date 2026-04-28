import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import PageError from "./Pages/PageError";
import ProjectDetails from "./Pages/ProjectDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="*" element={<PageError />} />
      </Routes>
    </>
  );
}

export default App;