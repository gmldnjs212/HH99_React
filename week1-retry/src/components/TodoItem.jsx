import React from 'react'
import styled from 'styled-components'

function ListItem() {
    
    return (
        <ToDoContainer>
            <div>
                <h2>title</h2>
                <div>content</div>
            </div>
            <ButtonGroup>
                <DeleteButton>삭제하기</DeleteButton>
                <ToggleButton>완료</ToggleButton>
            </ButtonGroup>
        </ToDoContainer>
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