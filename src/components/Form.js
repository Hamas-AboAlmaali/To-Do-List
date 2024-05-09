import React from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({input, setInput, todos, setTodos})=>{
    const inputChange = (e) => {
        setInput(e.target.value)
    }

    const formSubmit = (e) =>{
        e.preventDefault();
        setTodos([...todos, {id: uuidv4(), title: input, completed: false}]);
        setInput("")
    }
    
    return(
        <form onSubmit = {formSubmit}>
            <input className="task-input" type="text" placeholder="Enter a Task" value={input} onChange = {inputChange}/>
            <button className="button-add" type="submit">ADD</button> 
        </form>
    )
}

export default Form