import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Resume from "../components/Resume";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <Resume
                name="John Doe"
                jobTitle="Web Developer"
                email="john@example.com"
                phone="(123) 456-7890"
              />
            }
            path="/resume"
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
