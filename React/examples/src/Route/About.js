import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>소개</h1>
      <p>연수예용</p>
      <div>
        <Link to="/">홈으로 이동</Link>
      </div>
      <br />
      <div>
        <Link to="/profile/bonny">Bonny 프로필</Link>
        <br />
        <Link to="/profile/jessi">Jessi 프로필</Link>
      </div>
    </div>
  );
};

export default About;
