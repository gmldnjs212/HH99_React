import React from 'react';
import TodoItem from './TodoListItem';
import styled from 'styled-components';

export default function TodoList({ todos, setTodos }) {
  return (
    <ListContainer>
      <h2 className="list-title">Working.. 🔥</h2>
      {/* donsStatus가 false상태인것만 가져오기 */}
      <TodoItem doneStatus={ false } /> 
      <h2 className="list-title">Done..! 🎉</h2>
      {/* donsStatus가 true상태인것만 가져오기 */}
      <TodoItem doneStatus={ true } />
    </ListContainer>
  );
}

const ListContainer = styled.div`
  padding: 0 24px;
`