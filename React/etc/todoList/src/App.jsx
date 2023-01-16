import styled from 'styled-components'

// 쉬프트 옵션 방향키
function App() {
  return (
    <TodoLayout>
      <TodoWrapper>
        <Title>TODO</Title>
        <TodoForm>
          <TodoInput />
          <ButtonContainer>
            <CreateButton>추가</CreateButton>
            <CancelButton>삭제</CancelButton>
          </ButtonContainer>
        </TodoForm>
      </TodoWrapper>
    </TodoLayout>
  )
}

// 항상!!
// 통일성!!
const TodoLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
const TodoWrapper = styled.div`
  width: 25rem;
  height: 100vh;
`
const Title = styled.div`
  font-size: 1rem;
  padding: 1rem 2rem;
  font-weight: bold;
`

const TodoForm = styled.div`
  width: 25rem;
  height: 50rem;
  background-color: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 12px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 2rem 0;
`
// input을 커스텀으로 만들어서 똑같이 쓰자
const TodoInput = styled.input`
  width: 20rem;
  height: 3rem;
  background-color: #ffffff;
  border-radius: 12px;
  border: 1px solid #d9d9d9;
  padding-left: 1rem;
  font-size: 1.4rem;
`

const ButtonContainer = styled.div`
  width: 20rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`

const CreateButton = styled.button`
  width: 9.5rem;
  height: 3rem;
  background-color: #c12a5d;
  font-size: 1rem;
  border-radius: 12px;
  border: 1px solid #999999;
  color: #fff;
`
const CancelButton = styled(CreateButton)`
  background-color: #ffffff;
  border: 2px solid #c12a5d;
  color: #c12a5d;
  font-weight: bold;
`

// 위에는 보여주고 밑에는 리스트 형식
// 오른쪽에는 수정/삭제 버튼

/*
1. 입력폼
2. 추가 버튼
3. 리스트
4. 삭제 버튼
5. 수정 버튼
*/

export default App
