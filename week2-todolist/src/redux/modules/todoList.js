const ADD_TODO = 'todoList/ADD_TODO';
const DELETE_TODO = 'todoList/DELETE_TODO';
const TOGGLE_STATUS_TODO = 'todoList/TOGGLE_STATUS_TODO';
const GET_TODO_BY_ID = 'todoList/GET_TODO_BY_ID';

export const addTodo = (todo) => {
	return {
			type: ADD_TODO,
			payload: todo,
		};
	};
	export const toggleStatusTodo = (todoId) => {
		return {
			type: TOGGLE_STATUS_TODO,
			payload: todoId,
		};
	};
	export const deleteTodo = (todoId) => {
		return {
			type: DELETE_TODO,
			payload: todoId,
		};
	};
	export const getTodoById = (todoId) => {
		return {
			type: GET_TODO_BY_ID,
			payload: todoId,
		};
	};

// 초기값
const initialState = [
	{
		id: 1, // id는 모두 고유값이어야 합니다.
		title: "리액트 강의보기",
		body: "챕터 1부터 챕터 12까지 학습",
		isDone: false
	},
	{
		id: 2, // id는 모두 고유값이어야 합니다.
		title: "점심 먹기",
		body: "점심 뭐먹지..?",
		isDone: false
	}
]

const todoList = (state = initialState, action) => {
    switch(action.type) {
		// 제목, 내용 입력 후 > 추가하기 버튼 클릭시 작동
		case ADD_TODO:
			return{
				todo: [...state.todos, action.payload],
			};
		// todo item의 삭제하기 버튼 클릭시 작동
		case DELETE_TODO:
			return{
				todo: state.todos.filter((todo) => todo.id !== action.payload),
			};
		// isDone상태 전환 필요시 작동 ( 취소하기 <-> 완료하기 )
		case TOGGLE_STATUS_TODO:
			return{
				todo: state.todos.map((todo) => {
					if (todo.id !== action.payload) {
						return todo;
					} else {
						return { ...todo, isDone: !todo.isDone };
					}
				}),
			};
		// ID가 일치하는 TODO를 찾을 때 작동
		case GET_TODO_BY_ID:
			return{
				todos: state.todos, 
				todoItem: state.todos.find(({ id }) => id === action.payload)
			};
        default:
            return state;
    }
}

export default todoList;