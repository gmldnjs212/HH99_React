import React from 'react'
import styled from 'styled-components'

function ListItem({ todos, setTodos, doneStatus }) {
    // todo item 삭제함수
    const removeHandler = (targetId) => {
        setTodos(todos.filter((todo) => {
            return todo.id !== targetId
        }))
    }
    // 완료 <-> 취소 토글 함수
    const statusChanger = (targetId) => {
        setTodos(todos.map((todo)=>{
            return todo.id !== targetId ? todo : { ...todo, isDone: !todo.isDone }
        }))
    }
    // doneStatus를 비교하여 일치하는 위치에 배치되도록 필터링해서 재할당
    const todosClassfier = todos.filter((todo) => todo.isDone === doneStatus)

    return (
        <>
            {todosClassfier.map((todo) => {
                return (
                    <ToDoContainer key={todo.id}>
                        <div>
                            <h2>{todo.title}</h2>
                            <div>{todo.content}</div>
                        </div>
                        <ButtonGroup>
                            <DeleteButton  
                                    onClick={()=>removeHandler(todo.id)}>
                                        삭제하기
                            </DeleteButton>
                                <ToggleButton  
                                    onClick={()=>statusChanger(todo.id)}>
                                        {doneStatus ? "취소" : "완료"}
                            </ToggleButton>
                        </ButtonGroup>
                    </ToDoContainer>
                )
            })}
        </>
        
    )
}

export default ListItem

const ToDoContainer = styled.div`
    border: 4px solid teal;
    border-radius: 12px;
    padding: 12px 24px 24px;
    width: 270px;
`
const ButtonGroup = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 24px;
`
const DeleteButton = styled.button`
    background-color: #fff;
    border: 2px solid red;
    border-radius: 8px;
    cursor: pointer;
    height: 40px;
    width: 50%;
`
const ToggleButton = styled.button`
    background-color: #fff;
    border: 2px solid green;
    border-radius: 8px;
    cursor: pointer;
    height: 40px;
    width: 50%;
`