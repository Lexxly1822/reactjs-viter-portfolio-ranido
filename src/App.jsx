import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/pages/home/Home";
import About from "./components/pages/home/about/About";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
