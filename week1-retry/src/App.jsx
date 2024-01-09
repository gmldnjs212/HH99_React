import React, { useState } from 'react';
import styled from 'styled-components';
import FormArea from './components/FormArea';
import ListArea from './components/ListArea';

function App() {

	const [todos, setTodos] = useState([
		{
			id:1, 
			title:"리액트 학습", 
			content:"리액트를 공부합니다.",
			isDone:false
		},
		{
			id:2, 
			title:"CSS 학습", 
			content:"CSS를 공부합니다.",
			isDone:false
		}
	])

	return (
		<Layout>
			<Container>
				<div>My Todo List</div>
				<div>React</div>
			</Container>
			<FormArea />
			<ListArea />
		</Layout>
	)
}

export default App

const Layout = styled.div`
	margin: 0 auto;
	max-width: 1200px;
	min-width: 800px;
`
const Container = styled.div`
	align-items: center;
    border: 1px solid #ddd;
    display: flex;
    height: 50px;
    justify-content: space-between;
    padding: 0 20px;
`