import React from "react";

const TodoList = ({ todos, setTodos}) => {
    
    const deleteTodo = ({id}) =>{
        setTodos(todos.filter((ele) => ele.id !== id))
    }

        const completeTodo = (todo) =>{
            setTodos(todos.map((ele) => {
                if(ele.id === todo.id) return {...ele, completed: !ele.completed}
                return ele
            }))
        }
    
    
    return (
        <div>
        {todos.map((todo) => (
            <li className="list-item" key={todo.id}>
            <input
                className={`list ${todo.completed ? "complete" : ""}`}
                type="text"
                value={todo.title}
                onChange = {(e) => e.preventDefault()}
            />

            <div>
                <button className="button-complete task-button" onClick = {() => completeTodo(todo)}>
                    <i className="fa-solid fa-check-circle"/>
                </button>

                <button className="button-delete task-button" onClick = {() => deleteTodo(todo)}>
                    <i className="fa-solid fa-trash-can" aria-hidden="true"/>
                </button>
            </div>

            </li>
        ))}
        </div>
    );
    };

export default TodoList;
