import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>홈</h1>
      <p>홈이에용</p>
      <div>
        <Link to="/about">소개페이지로 이동</Link>
      </div>
    </div>
  );
};

export default Home;
