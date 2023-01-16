import { useState } from "react";

const DiaryEditor = () => {
  //   const [author, setAuthor] = useState("");
  //   const [content, setContent] = useState("");

  // useState 한 번에 관리
  const [state, setState] = useState({
    author: "",
    content: "",
    emotion: 1,
  });

  // 이벤트 핸들러 합치기
  const handleChangeState = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);

    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log(state);
    alert("저장 성공");
  };

  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        {/* 작성자 입력 */}
        <input
          name="author"
          value={state.author}
          onChange={handleChangeState}
          /*
          onChange={(e) => {
            setState({
              ...state, // 원래의 값들을 객체에 할당(순서 바꾸면 X)
              author: e.target.value,
            });
          }}
          */
        />
        <div>
          {/* 본문 입력 */}
          <textarea
            name="content"
            value={state.content}
            onChange={handleChangeState}
          />
        </div>
        <div>
          <select
            name="emotion"
            value={state.emotion}
            onChange={handleChangeState}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </div>
        <button onClick={handleSubmit}>저장하기</button>
      </div>
    </div>
  );
};

export default DiaryEditor;
