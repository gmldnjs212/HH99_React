import React from 'react'
import styled from 'styled-components'
import TodoItem from './TodoItem'

function OutputArea({ todos, setTodos }) {
    return (
        <ListContainer>

            <h2>Working.. 🔥</h2>
            <ListWrapper>
                <TodoItem todos={todos} setTodos={setTodos} doneStatus={false}/>
            </ListWrapper>

            <h2>Done..! 🎉</h2>
            <ListWrapper>
                <TodoItem todos={todos} setTodos={setTodos} doneStatus={true}/>
            </ListWrapper>

        </ListContainer>
    )
}

export default OutputArea;

const ListContainer = styled.div`
    padding: 0 24px;
`
const ListWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;    
`