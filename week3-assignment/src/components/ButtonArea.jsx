import React from 'react'
import styled from 'styled-components'


function ButtonArea() {
    const colorData = {
        MINT : "rgb(85, 239, 196)",
        ROSE : "rgb(250, 177, 160);",
        RED : "rgb(214, 48, 49);",
        BLACK : "rgb(0, 0, 0);",
    };
    const iconHander = (value) => {
        const pirmaryIcon = <span class="material-symbols-outlined">chevron_right</span>
        const negativeIcon = <span class="material-symbols-outlined">notifications</span>
        return value === "primary" ? pirmaryIcon : negativeIcon
    }
    return (
        <Container>
            <h1>Button</h1>
            <ButtonGroup>
                <LargeButton 
                    borderColor={colorData.MINT}
                    textColor={colorData.BLACK}
                    onClick={() => alert("버튼을 만들어보세요")}>
                        Large Primary Button {iconHander("primary")}
                </LargeButton>
                <MediumButton
                    backgroundColor={colorData.MINT}>
                    Medium
                </MediumButton>
                <SmallButton
                    backgroundColor={colorData.MINT}>
                    Small
                </SmallButton>
            </ButtonGroup>

            <ButtonGroup>
                <LargeButton 
                    borderColor={colorData.ROSE}
                    textColor={colorData.RED}
                    onClick={() => prompt("어렵나요?")}>
                        Large Negative Button {iconHander("")}
                </LargeButton>
                <MediumButton
                    textColor={colorData.RED}
                    backgroundColor={colorData.ROSE}>
                        Medium
                </MediumButton>
                <SmallButton
                    textColor={colorData.RED}
                    backgroundColor={colorData.ROSE}>
                    Small
                </SmallButton>
            </ButtonGroup>
        </Container>
    )
}

export default ButtonArea

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`
const ButtonGroup = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`
const LargeButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 8px;
    color: ${ (props) => props.textColor };
    height: 50px;
    width: 200px;
    border: 3px solid ${ (props) => props.borderColor };
    background-color: rgb(255, 255, 255);
    font-weight: 600;
`
const MediumButton = styled.button`
    border: none;
    cursor: pointer;
    border-radius: 8px;
    background-color: ${ (props) => props.backgroundColor };
    color: ${ (props) => props.textColor };
    height: 45px;
    width: 130px;
`
const SmallButton = styled.button`
    border: none;
    cursor: pointer;
    border-radius: 8px;
    background-color: ${ (props) => props.backgroundColor };
    color: ${ (props) => props.textColor };
    height: 40px;
    width: 100px;
`