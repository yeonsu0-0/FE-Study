import styled from 'styled-components'
import React, { useState, useCallback, useRef } from 'react'

// 쉬프트 옵션 방향키
function App() {
  const [todos, setTodos] = useState([])

  const nextId = useRef(1)

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
      }
      if (text === '') {
        alert('텍스트를 입력하세요!')
      } else {
        setTodos(todos.concat(todo))
        nextId.current += 1
      }
    },
    [todos],
  )

  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id))
    },
    [todos],
  )

  return (
    <TodoLayout>
      <TodoWrapper>
        <Title>TODO</Title>
        <TodoForm>
          <TodoInsert onInsert={onInsert} />
          <TodoList todos={todos} onRemove={onRemove} />
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
  width: 17rem;
  height: 3rem;
  background-color: #ede2e2;
  border-radius: 12px;
  border: 1px solid #d9d9d9;
  padding-left: 1rem;
  font-size: 1rem;
`

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('')

  const onChange = useCallback((e) => {
    setValue(e.target.value)
  }, [])

  const onSubmit = useCallback(
    (e) => {
      onInsert(value)
      setValue('')
      e.preventDefault()
    },
    [onInsert, value],
  )

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <ButtonContainer>
        <TodoInput
          placeholder="할 일을 입력하세요"
          value={value}
          onChange={onChange}
        />

        <CreateButton>+</CreateButton>
      </ButtonContainer>
    </form>
  )
}

const TodoList = ({ todos, onRemove }) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} />
      ))}
    </div>
  )
}

const TodoListItem = ({ todo, onRemove }) => {
  const { id, text } = todo
  return (
    <div>
      <TodoText>
        {text} <CancelButton onClick={() => onRemove(id)}>−</CancelButton>
      </TodoText>
    </div>
  )
}

const TodoText = styled.div`
  width: 22rem;
  height: 3rem;
  background-color: #ffffff;
  border-radius: 12px;
  border: 1px solid #d9d9d9;
  padding-left: 1rem;
  font-size: 1rem;
  line-height: 3rem;
  margin-bottom: 1rem;
`

const ButtonContainer = styled.div`
  width: 22rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 0.5rem;
`

const CreateButton = styled.button`
  width: 4rem;
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
  float: right;
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
