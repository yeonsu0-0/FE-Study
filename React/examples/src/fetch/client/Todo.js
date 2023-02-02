import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

// 서버로부터 데이터 불러오기
// 1. fetch
// 2. axios

// 프론트에서 서버에 데이터 요청을 할 때: 서버 주소, HTTP method 필요

// CORS: cross origin resource source 에러
// client - localhost:3000 (React 개발 서버)
// server - localhost:4000
// client와 server의 origin이 달라서 생기는 문제 => server에서 cors 라이브러리 설치로 일단 해결!

const Todo = () => {
  const [todoList, setTodoList] = useState([]);

  const fetchData = async () => {
    const { data } = await axios.get("http://localhost:4000/api/todo");
    setTodoList(data);
    // fetch("http://localhost:4000/api/todo")
    //   .then((response) => response.json())
    //   .then((data) => setTodoList(data));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const text = e.target.text.value;
    const done = e.target.done.checked;
    axios.post("http://localhost:4000/api/todo", { text, done });
    fetchData();
    // fetch("http://localhost:4000/api/todo", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     text,
    //     done,
    //   }),
    // }).then(() => fetchData());
  };

  // 서버로부터 데이터 받아오기(처음 렌더링 됐을 때만)
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="todo">
      <h1>TODO LIST</h1>
      <form onSubmit={onSubmitHandler}>
        <input name="text" />
        <input name="done" type="checkbox" />
        <input type="submit" value="추가" />
      </form>
      {todoList &&
        todoList.map((todo) => (
          <div key={todo.id} style={{ display: "flex" }}>
            <div>{todo.id}</div>
            <div>{todo.text}</div>
            <div>{todo.done ? "Y" : "N"}</div>
          </div>
        ))}
    </div>
  );
};

export default Todo;
