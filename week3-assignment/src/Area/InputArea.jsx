import React, { useState } from 'react'
import styled from 'styled-components'

function InputArea() {
    const [nameValue, setNameVal] = useState("");
    const [priceValue, setPriceValue] = useState(0);
    
    const nameOnChangeHandler = (event) => {
        setNameVal(event.target.value);
    }
    const priceOnChangeHandler = (event) => {
        let priceVal = event.target.value;
        priceVal = Number(priceVal.replaceAll(',', ''));
        if(isNaN(priceVal)){
            setPriceValue(0)
        } else {
            setPriceValue(priceVal.toLocaleString('ko-KR'));
        }
    }
    const handleButtonClick = () => {
        // 버튼 클릭 시 nameValue와 priceValue를 출력하는 로직
        console.log(typeof(priceValue));
        alert(`Name: ${nameValue}, Price: ${priceValue}`);
    };
    return (
        <div>
            <h1>Input</h1>
            <form>
                <Container>
                    <div>
                        <label>이름</label>
                        <InputBox 
                            type='text'
                            onChange={nameOnChangeHandler} />
                    </div>
                    <div>
                        <label>가격</label>
                        <InputBox 
                            type='text'
                            value = {priceValue}
                            onChange={priceOnChangeHandler} />
                    </div>
                    <SaveButton
                        onClick={() => handleButtonClick()}>
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