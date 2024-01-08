import React from "react";
import styled from "styled-components";

function MyModalB({ onClose }){
    // 외부 영역 클릭시 닫혀야 함
    // 우측상단에 닫기 버튼이 있고 누르면 닫혀야함
    return (
        <div className="MyModalB">
            <Mask onClick={onClose}></Mask>
            <ModalBody>
                <div>
                    닫기 버튼 1개가 있고,
                    <br />
                    외부 영역을 누르면 모달이 닫혀요.
                </div>
                <ModalButtonGroup>
                    <div>
                        <CloseButton onClick={onClose}>
                            X
                        </CloseButton>
                    </div>
                </ModalButtonGroup>
            </ModalBody>
        </div>
    );
};

export default React.memo(MyModalB);

const Mask = styled.div`
    width: 100%;
    height: 100vh;
    inset: 0px;
    position: fixed;
    opacity: 0.8;
    background-color: rgb(221, 221, 221);
`
const ModalBody = styled.div`
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 12px;
    box-sizing: border-box;
    padding: 24px;
    background-color: rgb(255, 255, 255);
    width: 300px;
    height: 200px;
    position: absolute;
`
const ModalButtonGroup = styled.div`
    position: absolute;
    top: 12px;
    right: 12px;
`
const CloseButton = styled.button`
    border: 1px solid rgb(221, 221, 221);
    width: 40px;
    height: 40px;
    border-radius: 100%;
    cursor: pointer;
`