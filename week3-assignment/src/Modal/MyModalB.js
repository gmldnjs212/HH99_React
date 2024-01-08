import React from "react";
import styled from "styled-components";

function MyModalB({ onClose }){
    return (
        <div className="MyModalB">
            <Mask onClick={onClose}></Mask>
            <ModalBody>
                <div>닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않아요.</div>
                <ModalButtonGroup>
                    <div>
                        <CloseButton onClick={() => alert("닫기 버튼")}>
                            닫기
                        </CloseButton>
                    </div>
                    <ConfirmButton>
                        확인
                    </ConfirmButton>
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
    width: 500px;
    height: 300px;
    position: absolute;
`
const ModalButtonGroup = styled.div`
    position: absolute;
    bottom: 12px;
    right: 12px;
    display: flex;
    gap: 5px;
`
const CloseButton = styled.button`
    border: none;
    cursor: pointer;
    border-radius: 8px;
    background-color: rgb(250, 177, 160);
    color: rgb(214, 48, 49);
    height: 40px;
    width: 100px;
`
const ConfirmButton = styled.button`
    border: none;
    cursor: pointer;
    border-radius: 8px;
    background-color: rgb(85, 239, 196);
    color: rgb(0, 0, 0);
    height: 40px;
    width: 100px;
`