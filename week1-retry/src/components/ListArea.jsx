import React from 'react'
import styled from 'styled-components'
import ListItem from './TodoItem'

function ListArea() {
    return (
        <ListContainer>
            <h2>Working.. 🔥</h2>
            <ListWrapper>
                <ListItem />
            </ListWrapper>
            <h2>Done..! 🎉</h2>
            <ListWrapper>
                <ListItem />
            </ListWrapper>
        </ListContainer>
    )
}

export default ListArea

const ListContainer = styled.div`
    padding: 0 24px;
`
const ListWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;    
`