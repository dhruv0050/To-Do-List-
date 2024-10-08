import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext';

function TodoForm() {
    const [todo, setTodo] = useState("")
    const { addTodo } = useTodo()

    const add = (e) => {
      e.preventDefault()

      if (!todo) return

      addTodo({ todo, completed: false })
      setTodo("")
    }

    return (
        <form onSubmit={add} className="todo-form">
            <input
                type="text"
                placeholder="Enter Tasks"
                className="todo-input"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="todo-button">
                Add
            </button>
        </form>
    )
}

export default TodoForm
