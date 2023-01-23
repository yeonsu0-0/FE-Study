// 작업을 비동기로 처리하는 경우: 서버 API 호출, setTimeout 함수를 이용해서 특정 작업을 예약할 때 등

function printMe() {
  console.log("Hello World!");
}

setTimeout(printMe, 3000);
console.log("대기 중...");

/*
대기 중...
Hello React!
*/

// 콜백 함수
// ex) 파라미터 값이 주어지면 1초 뒤에 10을 더해서 반환하는 함수
function increase(number, callback) {
  setTimeout(() => {
    const result = number + 10;
    if (callback) {
      callback(result);
    }
  }, 1000);
}

increase(0, (result) => {
  console.log(result);
});

// 콜백 지옥
console.log("작업 시작 ");
increase(0, (result) => {
  console.log(result);
  increase(result, (result) => {
    console.log(result);
    increase(result, (result) => {
      console.log(result);
      console.log("작업 시작 ");
    });
  });
});

/* 
작업 시작
10
20
30
*/

// Promise
function increase2(number) {
  const promise = new Promise((resolve, reject) => {
    // resolve - 성공, reject - 실패
    setTimeout(() => {
      const result = number + 10;
      if (result > 50) {
        const e = new Error("숫자가 커요");
        return reject(e);
      }
      resolve(result);
    }, 1000);
  });
  return promise;
}

increase2(0)
  .then((number) => {
    console.log(number);
    return increase(number); // Promise를 리턴하면 또 .then으로 처리 가능
  })
  .then((number) => {
    console.log(number);
    return increase(number);
  })
  .then((number) => {
    console.log(number);
    return increase(number);
  })
  .catch((e) => {
    console.log(e);
  });

// async / await
// Promise가 끝날 때까지 기다리고, 결과 값을 특정 변수에 담을 수 있다
async function runTasks() {
  try {
    let result = await increase(0);
    console.log(result);
    result = await increase(result);
    console.log(result);
    result = await increase(result);
    console.log(result);
  } catch (e) {
    console.log(e);
  }
}
