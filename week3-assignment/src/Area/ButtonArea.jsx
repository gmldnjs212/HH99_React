import React from 'react'
import styled from 'styled-components'

// 색상 정보
const colorData = {
    MINT : "rgb(85, 239, 196)",
    ROSE : "rgb(250, 177, 160);",
    RED : "rgb(214, 48, 49);",
    BLACK : "rgb(0, 0, 0);",
    WHITE : "rgb(255, 255, 255);",
};

// 크기 정보
const sizeData = {
    LARGE : {
        height: "50px",
        width: "200px"
    },
    MEDIUM : {
        height: "45px",
        width: "130px"
    },
    SMALL : {
        height: "40px",
        width: "100px"
    },
};

// 아이콘 핸들러
const iconHander = (value) => {
    const pirmaryIcon = <span class="material-symbols-outlined">chevron_right</span>
    const negativeIcon = <span class="material-symbols-outlined">notifications</span>
    return value === "primary" ? pirmaryIcon : negativeIcon
};

// 메시지 핸들러
const messageHandler = (value) => {
    return value==="primary" ? alert("alert입니다.") : prompt("prompt입니다.")
}

function ButtonArea() {
    return (
        <Container>
            <h1>Button</h1>
            <ButtonGroup>
                <Button
                    textColor={colorData.BLACK}
                    borderColor={colorData.MINT}
                    backgroundColor={colorData.WHITE} 
                    {...sizeData.LARGE}
                    onClick={()=>messageHandler("primary")}>
                        Large Negative Button {iconHander("primary")}
                </Button>
                <Button
                    textColor={colorData.BLACK}
                    backgroundColor={colorData.MINT}
                    {...sizeData.MEDIUM}>
                        Medium
                </Button>
                <Button
                    textColor={colorData.BLACK}
                    backgroundColor={colorData.MINT}
                    {...sizeData.SMALL}>
                        Small
                </Button>
            </ButtonGroup>
            <ButtonGroup>
                <Button
                    textColor={colorData.RED}
                    borderColor={colorData.ROSE}
                    backgroundColor={colorData.WHITE} 
                    {...sizeData.LARGE}
                    onClick={()=>messageHandler("")}>
                        Large Negative Button {iconHander("")}
                </Button>
                <Button
                    textColor={colorData.RED}
                    backgroundColor={colorData.ROSE} 
                    {...sizeData.MEDIUM}>
                        Medium
                </Button>
                <Button
                    textColor={colorData.RED}
                    backgroundColor={colorData.ROSE} 
                    {...sizeData.SMALL}>
                        Small
                </Button>
            </ButtonGroup>
        </Container>
    )
}

export default ButtonArea

const Button = styled.button`
    cursor: pointer;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.textColor};
    height: ${(props) => props.height};
    width: ${(props) => props.width};
    border: ${(props) => (props.borderColor ? `3px solid ${props.borderColor}` : 'none')};
    background-color: ${(props) => props.backgroundColor || 'rgb(255, 255, 255)'};
    font-weight: 600;
`;

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