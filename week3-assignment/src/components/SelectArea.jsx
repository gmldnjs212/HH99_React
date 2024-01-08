import React from 'react'
import styled from 'styled-components'

function SelectArea() {
    return (
        <div id="one">
            <Cotainer>
                <h1>Select</h1>
                <SelectGroup>
                    <SelectItem>
                        <Button>
                            <div>리액트</div>
                            <div>▼</div>
                        </Button>
                    </SelectItem>
                    <SelectItem>
                        <Button>
                            <div>리액트</div>
                            <div>▼</div>
                        </Button>
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
    overflow: hidden;
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