// 페이지 주소를 유동적인 값으로 전달해야 할 때
// 1. URL 파라미터: 특정 아이디 또는 이름을 사용하여 조회할 때 사용
// 2. 쿼리: 우리가 어떤 키워드를 검색하거나 페이지에 필요한 옵션을 전달할 때 사용

import React from "react";
import { useParams } from "react-router-dom";

const data = {
  bonny: {
    name: "연수",
    description: "리액트 좋아",
  },
  jessi: {
    name: "지은",
    description: "리액트 싫어",
  },
};

// URL 파라미터를 사용할 때는 라우트로 사용되는 컴포넌트에서 받아오는 match라는 객체 안의 params 값을 참조
// match 객체 안에는 현재 컴포넌트가 어떤 경로 규칙에 의해 보이는지에 대한 정보가 들어있음

//react-router-dom 버전 6부터는 element로 컴포넌트를 만들고, route props(match, history, location)을 받지 않는다.
// 따라서, useParams, useLocation, useHistory를 사용하여 route context에 접근한다

const Profile = () => {
  const { username } = useParams();
  const profile = data[username];
  if (!profile) {
    return <div>존재하지 않는 사용자입니다.</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
};

export default Profile;
