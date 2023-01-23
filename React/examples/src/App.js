// import React, { useState } from "react";
// import axios from "axios";
import NewsList from "./NewsAPI/NewsList";
import Categories from "./NewsAPI/Categories";
// import { Route, Routes } from "react-router-dom";
// import About from "./Route/About";
// import Home from "./Route/Home";
// import Profile from "./Route/Profile";
import { useState, useCallback } from "react";

// axios로 API 호출
/* 
function App() {
  const [data, setData] = useState(null);
  const onClick = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => {
        setData(response.data);
      });
  };
  */

// async, await 사용
/*
function App() {
  const [data, setData] = useState(null);
  const onClick = async () => {
    try {
      const response = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=kr&apiKey=0b72a0f996c24a6fb5dfb8434f9980f9"
      );
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile/:username" element={<Profile />} />
      </Routes>}
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && (
        <textarea
          row={7}
          value={JSON.stringify(data, null, 3)}
          readOnly={true}
        />
      )}
    </>
  );
}
*/

const App = () => {
  const [category, setCategory] = useState("all");
  const onSelect = useCallback((category) => setCategory(category), []);
  return (
    <>
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />
    </>
  );
};
export default App;
