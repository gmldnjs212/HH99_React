import React, {useEffect} from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, toggleStatusTodo } from '../redux/modules/todoList';
import { Link } from 'react-router-dom';

export default function TodoListItem({ doneStatus }) {

  // 디스패치 생성
  const dispatch = useDispatch();
  
  // 저장소에서 데이터 가져옴
  const todos = useSelector((state) => state.todoList.todos );
  
  // 현재 진행 여부에 해당되는 리스트만 담기
  const filteredTodos = todos.filter((todo) => todo.isDone !== doneStatus);
  useEffect(() => {console.log(filteredTodos)}, []);

  return (
    <ListWrapper>
      {filteredTodos.map((todo) => {
        return (
          <TodoContainer 
            key={`${todo.id}`}>

            <div>
              <Link to={`/${todo.id}`}>
                <div>상세보기</div>
              </Link>
              <h2 className="todo-title">{todo.title}</h2>
              <div>{todo.body}</div>
            </div>

            <ButtonSet>
              <TodoDeleteBtn 
                onClick={() => {dispatch(deleteTodo(todo.id))}}>
                삭제하기
              </TodoDeleteBtn>

              <TodoCompleteBtn 
                onClick={() => {dispatch(toggleStatusTodo(todo.id))}}>
                {doneStatus ? '취소' : '완료'}
              </TodoCompleteBtn>
            </ButtonSet>

          </TodoContainer>
        );
      })}
    </ListWrapper>
  );
}

const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`
const TodoContainer = styled.div`
  border: 4px solid teal;
  border-radius: 12px;
  padding: 12px 24px 24px;
  width: 270px;
`
const ButtonSet = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 24px;
`
const TodoDeleteBtn = styled.button`
  border: 1px solid red;
  height: 40px;
  width: 120px;
  background-color: rgb(255, 255, 255);
  border-radius: 12px;
  cursor: pointer;
`
const TodoCompleteBtn = styled.button`
  border: 1px solid green;
  height: 40px;
  width: 120px;
  background-color: rgb(255, 255, 255);
  border-radius: 12px;
  cursor: pointer;
`
