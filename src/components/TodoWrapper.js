import React, { useState } from "react";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from 'uuid'; 
import { Todo } from "./Todo";
import { EditTodoForm } from "./EditTodoForm";
import { Login } from "./login.js"
import { Register } from "./register.js"
import { DatePicker } from "./datePicker.js"
uuidv4();


export const TodoWrapper = () => {
    const [todos, setTodos ] = useState([]);
    const [users, setUsers ] = useState([]);
    const [user, setUser ] = useState([null]);
    const [selectedDate, setSelectedDate ] = useState('');

    const addTodo = todo => {
        setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}])
        console.log(todos)
    }

    const toggleComplete = id => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
    }

    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const editTodo = id => {
        setTodos(todos.map(todo => todo.id ===id ? {...todo, isEditing: !todo.isEditing} : todo))
    }

    const editTask = (task, id) => {
        setTodos(todos.map(todo => todo.id === id ? {... todo, task, isEditing: !todo.isEditing} : todo))
    }

    const registerUser = (username, password) => {
        setUsers([...users, {username, password}]);
    };

    const loginUser = (username, password) => {
        const foundUser = users.find(user => user.username === username && user.password === password);
        if (foundUser) {
            setUser(foundUser);
        } else {
            alert('Invalid Username or Password')
        }
    }

    return (
        <div className="TodoWrapper">
          {!user ? (
            <>
              <Login loginUser={loginUser} />
              <Register registerUser={registerUser} />
            </>
          ) : (
            <>
            <h1>Get Things Done! {user.username}</h1>
            {/* <DatePicker selectedDate = {selectedDate} setSelectedDate={setSelectedDate} /> */}
            <TodoForm addTodo={addTodo}/>
            {todos.map((todo, index) => (
                todo.isEditing ? (
                    <EditTodoForm editTodo={editTask} task={todo}/>
                ) : (
                    <Todo task={todo} key={index}
                    toggleComplete={toggleComplete}
                    deleteTodo={deleteTodo} editTodo={editTodo} />
                )
            ))}
            </>
          )}
        </div>
      );
    };

    // const tasksForSelectedDate = value[selectedDate] || []
    // return (
    //     <div className="TodoWrapper">
    //         <h1>Get Things Done!</h1>
    //         <DatePicker selectedDate = {selectedDate} setSelectedDate={setSelectedDate} />
    //         <TodoForm addTodo={addTodo}/>
    //         {todos.map((todo, index) => (
    //             todo.isEditing ? (
    //                 <EditTodoForm editTodo={editTask} task={todo}/>
    //             ) : (
    //                 <Todo task={todo} key={index}
    //                 toggleComplete={toggleComplete}
    //                 deleteTodo={deleteTodo} editTodo={editTodo} />
    //             )
    //         ))}
            
    //     </div>
    // )

export default TodoWrapper;