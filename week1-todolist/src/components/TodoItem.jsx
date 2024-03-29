import React from 'react';
import '../style/TodoItem.css';

export default function TodoItem({ todos, doneStatus, removeHandler, statusChangeHandler }) {
    const filteredTodos = todos.filter((todo) => todo.isDone === doneStatus);
    return (
    <div className="list-wrapper">
        {filteredTodos.map((todo) => {
        return (
            <div className="todo-container" key={todo.title}>
            <div>
                <h2 className="todo-title">{todo.title}</h2>
                <div>{todo.body}</div>
            </div>
            <div className="button-set">
                <button className="todo-delete-button button" onClick={() => removeHandler(todo.id)}>
                삭제하기
                </button>
                <button className="todo-complete-button button" onClick={() => statusChangeHandler(todo.id)}>
                {doneStatus ? '취소' : '완료'}
                </button>
            </div>
            </div>
        );
        })}
    </div>
    );
}