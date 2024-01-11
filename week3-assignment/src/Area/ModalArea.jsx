import React, { useState } from 'react'
import styled from 'styled-components'
import MyModalA from '../Modal/MyModalA';
import MyModalB from '../Modal/MyModalB';
import ModalPortal from '../Modal/ModalPortal';


function ModalArea() {
    // 모달창 켜져있는지에 대한 여부
    const [modalAIsOn, setmodalAIsOn] = useState(false);
    const [modalBIsOn, setmodalBIsOn] = useState(false);
    // 모달창 상태 토글 함수
    const modalAStatusChanger = () => { 
        // console.log("MODAL A 실행됨");
        return setmodalAIsOn(!modalAIsOn) 
    };
    const modalBStatusChanger = () => { 
        // console.log("MODAL B 실행됨");
        return setmodalBIsOn(!modalBIsOn) 
    };

    return (
        <div>
            <h1>Modal</h1>
            <Container>
                <div>
                    <ButtonA 
                        onClick={() => modalAStatusChanger()}
                        >
                            open modal
                    </ButtonA>
                        <ModalPortal>
                            {modalAIsOn && <MyModalA onClose={modalAStatusChanger} />}
                        </ModalPortal>
                </div>
                <div>
                    <ButtonB 
                        onClick={() => modalBStatusChanger()}
                        >
                            open modal
                    </ButtonB>
                        <ModalPortal>
                            {modalBIsOn && <MyModalB onClose={modalBStatusChanger} />}
                        </ModalPortal>
                </div>
            </Container>
        </div>
    )
}

export default ModalArea;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`
const ButtonA = styled.button`
    border: none;
    cursor: pointer;
    border-radius: 8px;
    background-color: rgb(85, 239, 196);
    color: rgb(0, 0, 0);
    height: 40px;
    width: 100px;
`
const ButtonB = styled.button`
    cursor: pointer;
    border-radius: 8px;
    color: rgb(214, 48, 49);
    height: 50px;
    width: 200px;
    border: 3px solid rgb(250, 177, 160);
    background-color: rgb(255, 255, 255);
    font-weight: 600;
`