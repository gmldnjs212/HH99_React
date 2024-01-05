import { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { addTodo } from '../redux/modules/todoList';

export default function TodoInput() {
  
  // 디스패치 생성
  const dispatch = useDispatch();

  // 저장소에서 데이터 가져옴
  const todos = useSelector((state) => state.todoList.todos);

  const [titleVal, setTitleVal] = useState('');
  const [bodyVal, setBodyVal] = useState('');
  const todoId = useRef(()=>{
    if(todos.length === 0){
      return todos[todos.length-1].id;
    }
    else{
      return 0;
    }
  });

  // 제목, 내용 변경 핸들러
  const titleChangeHandler = (event) => setTitleVal(event.target.value);
  const bodyChangeHandler = (event) => setBodyVal(event.target.value);

  // 추가하기 버튼 핸들러
  const submitHandler = () => {
    todoId.current++;
    const todo = { id: todoId.current, title: titleVal, body: bodyVal, isDone: false };
    dispatch(addTodo(todo));
    setTitleVal('');
    setBodyVal('');
  };

  return (
    <InputContainer>
      <InputGroup>
        <InputLabel>제목</InputLabel>
        <AddInput
          type="text"
          name="title"
          onChange={titleChangeHandler}
          value={titleVal}
        />
        <InputLabel>내용</InputLabel>
        <AddInput 
          type="text" 
          name="body" 
          onChange={bodyChangeHandler} 
          value={bodyVal} />
      </InputGroup>
      <AddButton onClick={submitHandler}>
        추가하기
      </AddButton>
    </InputContainer>
  );
}

const InputContainer = styled.div`
  align-items: center;
  display: flex;
  gap: 20px;
  background-color: #eee;
  border-radius: 12px;
  justify-content: space-between;
  margin: 0 auto;
  padding: 30px;
`;
const AddButton = styled.button`
  border: none;
  border-radius: 8px;
  cursor: pointer;
  height: 40px;
  width: 50%;
  background-color: teal;
  border: none;
  border-radius: 10px;
  color: #fff;
  font-weight: 700;
  height: 40px;
  width: 140px;
`;
const InputGroup = styled.div`
  align-items: center;
  display: flex;
  gap: 20px;
`;
const InputLabel = styled.label`
  font-size: 16px;
  font-weight: 700;
`;
const AddInput = styled.input`
  border: none;
  border-radius: 12px;
  height: 40px;
  padding: 0 12px;
  width: 240px;
`;