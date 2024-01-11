import React from "react";
import styled from "styled-components";
import { useRef } from "react";

function MyDropDownA({ onClose }){
    // 박스 바깥으로 나가야함

    return (
        <div className="MyDropDownA">
            <Mask onClick={onClose}></Mask>
            <DropdownBody>
                <DropdownContent 
                    onClick={()=>alert("리액트")}>
                            리액트 
                </DropdownContent>
                <DropdownContent 
                    onClick={()=>alert("자바")}>
                            자바 
                </DropdownContent>
                <DropdownContent 
                    onClick={()=>alert("스프링")}>
                            스프링 
                </DropdownContent>
                <DropdownContent
                    onClick={()=>alert("리액트네이티브")}>
                            리액트네이티브 
                </DropdownContent>
            </DropdownBody>
        </div>
    );
};

export default React.memo(MyDropDownA);

const Mask = styled.div`
    width: 100%;
    height: 100vh;
    inset: 0px;
    position: fixed;
`
const DropdownBody = styled.div`
    left: 155px;
    top: 720px;
    border: 1px solid lightgray;
    transform: translate(-50%, -50%);
    border-radius: 12px;
    box-sizing: border-box;
    background-color: rgb(255, 255, 255);
    width: 300px;
    height: 150px;
    position: absolute;
`
const DropdownContent = styled.div`
    width:290px;
    height: 40px;
    padding-left: 10px;
    font-size: 14px;
    &:hover {
        background: #EEE;
    }
    
`