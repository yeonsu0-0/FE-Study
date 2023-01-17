import React, { Component } from "react";

class Counter extends Component {
  // 생성자
  constructor(props) {
    super(props); // 생성자 작성 시 필수로 호출!
    // state의 초깃값 설정하기
    this.state = {
      number: 0,
    };
  }

  render() {
    const { number } = this.state; // 현재 state 조회: this.state
    return (
      <div>
        <h1> {number} </h1>
        {/* button 태그 안에 onClick 값을 props로 넣어서 버튼 클릭 시 호출시킬 함수 설정 */}
        <button
          onClick={() => {
            this.setState(
              {
                number: number + 1,
              },
              () => {
                console.log("방금 setState가 호출되었습니다");
              }
            ); // setState(): state값 변경
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
