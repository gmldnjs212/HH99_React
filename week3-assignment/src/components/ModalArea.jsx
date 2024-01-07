import React from 'react'
import styled from 'styled-components'

function ModalArea() {
    return (
        <div>
            <div>
                <h1>Modal</h1>
                <Container>
                    <div>
                        <ButtonA>open modal</ButtonA>
                    </div>
                    <div>
                        <ButtonB>open modal</ButtonB>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default ModalArea

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