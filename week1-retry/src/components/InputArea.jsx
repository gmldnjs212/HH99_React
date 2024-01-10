import React, { useRef, useState } from 'react'
import styled from 'styled-components'

function InputArea({ todos, setTodos }) {
    // 추가되는 제목, 내용을 useState로 상태관리
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    // useRef사용
        // dom요소에 접근하기 위해 사용된다
        // useRef로 관리하는 값은 값이 변해도 화면이 렌더링되지 않음
        // state는 리렌더링이 꼭 필요한 값을 다룰 때 쓰면 된다.
        // ref는 리렌더링을 발생시키지 않는 값을 저장할 때 사용한다.
    const todoId = useRef(todos.length !== 0 ? todos.length : 0);

    // 입력되는 제목, 내용값을 onChange로 읽어들여 setTitle, setContent를 통해 state값 변경
    const titleChangeHandler = (e) => setTitle(e.target.value);
    const contentChangeHandler = (e) => setContent(e.target.value);

    // "추가하기" 버튼 클릭시 작동할 함수
    const submitHandler = () => {
        todoId.current++;
        setTodos([...todos, {id: todoId.current, title, content, isDone:false}]);
        setTitle('');
        setContent('');
    };

    return (
        <AddForm>
            <InputGroup>
                <InputLabel>제목</InputLabel>
                <AddInput 
                    type="text" 
                    name="title"
                    value={title}
                    onChange={titleChangeHandler}/>
                <InputLabel>내용</InputLabel>
                <AddInput 
                    type="text"
                    name="content"
                    value={content}
                    onChange={contentChangeHandler}/>
            </InputGroup>
            <AddButton
                onClick={()=>{submitHandler()}}>
                    추가하기
            </AddButton>
        </AddForm>
    )
}

export default InputArea

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