import React, { useState } from 'react'
import styled from 'styled-components'
import MyDropdownA from '../Modal/MyDropDownA';
import MyDropdownB from '../Modal/MyDropDownB';
import ModalPortal from '../Modal/ModalPortal';

function SelectArea() {
    // 드랍다운 켜져있는지에 대한 여부
    const [dropDownAIsOn, setdropDownAIsOn] = useState(false);
    const [dropDownBIsOn, setdropDownBIsOn] = useState(false);
    // 드랍다운 상태 토글 함수
    const dropDownAStatusChanger = () => { 
        // console.log("DROPDOWN A 실행됨");
        return setdropDownAIsOn(!dropDownAIsOn) 
    };
    const dropDownBStatusChanger = () => { 
        // console.log("DROPDOWN B 실행됨");
        return setdropDownBIsOn(!dropDownBIsOn) 
    };
    const [currentItem, setCurentItem] = useState("리액트");
    const [newItem, setNewItem] = useState("");

    return (
        <div id="one">
            <Cotainer>
                <h1>Select</h1>
                <SelectGroup>
                    <SelectItem>
                        <Button 
                            onClick={() => dropDownAStatusChanger()}
                            // onClick={() => alert(dropDownAIsOn)}
                            >
                            <div>{currentItem}</div>
                            <div>▼</div>
                        </Button>
                        <ModalPortal>
                            {dropDownAIsOn && <MyDropdownA onClose={dropDownAStatusChanger} />}
                        </ModalPortal>
                    </SelectItem>
                    <SelectItem>
                        <Button 
                                onClick={() => dropDownBStatusChanger()}
                                // onClick={() => alert(dropDownBIsOn)}
                                >
                            <div>리액트</div>
                            <div>▼</div>
                        </Button>
                        <ModalPortal>
                            {dropDownBIsOn && <MyDropdownB onClose={dropDownBStatusChanger} />}
                        </ModalPortal>
                    </SelectItem>
                </SelectGroup>
            </Cotainer>
            
        </div>
    )
}

export default SelectArea

const Cotainer = styled.div`
    border: 3px solid rgb(221, 221, 221);
    height: 200px;
    position: relative;
    margin-top: 50px;
`
const SelectGroup = styled.div`
    display: flex;
    gap: 10px;
`
const SelectItem = styled.div`
    position: relative;
`
const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 28px;
    border: 1px solid rgb(221, 221, 221);
    height: 40px;
    width: 300px;
    background-color: rgb(255, 255, 255);
    border-radius: 12px;
`