import React, { useState } from 'react'
import styled from 'styled-components'

function FormArea() {
    const [titleVal, setTitleVal] = useState("")
    const [contentVal, setContentVal] = useState("")
    const addButtonHandler = () => {

    }
    return (
        <AddForm>
            <InputGroup>
                <InputLabel>제목</InputLabel>
                <AddInput 
                    type="text" 
                    name="title"/>
                <InputLabel>내용</InputLabel>
                <AddInput 
                    type="text"
                    name="content"/>
            </InputGroup>
            <AddButton
                onClick={()=>addButtonHandler()}>추가하기</AddButton>
        </AddForm>
    )
}

export default FormArea

const AddForm = styled.div`
	align-items: center;
    display: flex;
    gap: 20px;
    background-color: #eee;
    border-radius: 12px;
    justify-content: space-between;
    margin: 0 auto;
    padding: 30px;
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
const AddButton = styled.button`
    background-color: teal;
    border: none;
    border-radius: 10px;
    color: #fff;
    font-weight: 700;
    height: 40px;
    width: 140px;
`;