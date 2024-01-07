import React from 'react'
import styled from 'styled-components'

function InputArea() {
    return (
        <div>
            <h1>Input</h1>
            <form>
                <Container>
                    <div>
                        <label>이름</label>
                        <InputBox type='text'/>
                    </div>
                    <div>
                        <label>가격</label>
                        <InputBox type='text' value="0"/>
                    </div>
                    <SaveButton
                        onClick={() => alert("저장 버튼")}>
                            저장
                    </SaveButton>
                </Container>
            </form>
        </div>
    )
}

export default InputArea

const Container = styled.div`
    display: flex;
    flex-direction: row;
    gap: 30px;
`
const InputBox = styled.input`
    border: 1px solid rgb(51, 51, 51);
    height: 40px;
    width: 200px;
    outline: none;
    border-radius: 8px;
    padding-left: 12px;
    padding-right: 12px;
`
const SaveButton = styled.button`
    border: none;
    cursor: pointer;
    border-radius: 8px;
    background-color: rgb(85, 239, 196);
    color: rgb(0, 0, 0);
    height: 40px;
    width: 100px;
`