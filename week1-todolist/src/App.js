import './style/App.css';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import { useState } from 'react';

export default function App() {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [todo, setTodo] = useState([
        { id: 1, title: '리액트 공부하기', content: '리액트를 공부해봅시다.', isDone: false},
        { id: 2, title: 'CSS 공부하기', content: 'CSS를 공부해봅시다.', isDone: true}
    ])

    const titleChangeHandler = event => {setTitle(event.target.value)}
    const contentChangeHandler = event => {setContent(event.target.value)}
    const submitHandler = () => {
        setTodo([...todo, { id: todo.length + 1, title: title, content: content, isDone: false }]);
        setTitle('');
        setContent('');
    };
    const removeHandler = (targetId) => setTodo(todo.filter((todo) => todo.id !== targetId));

    const statusChangeHandler = (targetId) => {
        const findIdx = todo.findIndex((todo) => todo.id === targetId);
        const copiedTodos = [...todo];
        copiedTodos[findIdx].isDone = !copiedTodos[findIdx].isDone;
        setTodo(copiedTodos);
    };

    return (
    <div className="layout">
        <div className="container">
            <div>My Todo List</div>
            <div>React</div>
            </div>
            <TodoInput
            titleVal={title}
            bodyVal={content}
            titleChangeHandler={titleChangeHandler}
            bodyChangeHandler={contentChangeHandler}
            submitHandler={submitHandler}
            />
            <TodoList todos={todo} removeHandler={removeHandler} statusChangeHandler={statusChangeHandler} />
    </div>
    )
}
