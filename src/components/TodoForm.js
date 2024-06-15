import React, {useState} from "react";

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("")
    const [date, setDate] = useState("")

    const handleSubmit = e => {
        e.preventDefault();
        if (value.trim() && date.trim()){
            addTodo(value, date)
            setValue('')
            setDate('')
        }

        addTodo(value)

        setValue('')
    }
    return(
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input type="text" className="todo-input" value={value}
            placeholder="Let's get the list rolling..." onChange={(e) => setValue(e.target.value)}/>
            {/* <input type="date" value={date} onChange={(e) => setDate(e.target.value)} /> */}
            <button type="submit" className="todo-btn">Add Task</button>
        </form>
    )
}