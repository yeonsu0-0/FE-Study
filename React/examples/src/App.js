import "./App.css";
import { Route, Routes } from "react-router-dom";
import About from "./Route/About";
import Home from "./Route/Home";
import Profile from "./Route/Profile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile/:username" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
