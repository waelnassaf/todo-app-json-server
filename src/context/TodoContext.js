import { createContext, useState } from "react"
import { v4 as uuidv4 } from "uuid"
import TodosData from "../data/TodosData"

const TodoContext = createContext()

export const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState(TodosData)

    const [todoEdit, setTodoEdit] = useState({
        item: {},
        edit: false,
    })

    const addTodo = (newTodo) => {
        newTodo.id = uuidv4()
        setTodos([newTodo, ...todos])
    }

    //Set item to be updated.
    const editTodo = (item) => {
        setTodoEdit({ item, edit: true })
    }

    const updateTodo = (id, updatedItem) => {
        setTodos(
            todos.map((item) =>
                item.id === id ? { ...item, ...updatedItem } : item
            )
        )
    }

    const deleteTodo = (id) => {
        if (window.confirm("Are you sure you want to delete this todo?")) {
            setTodos(todos.filter((todo) => todo.id !== id))
        }
    }

    return (
        <TodoContext.Provider
            value={{
                todos,
                todoEdit,
                deleteTodo,
                addTodo,
                editTodo,
                updateTodo,
            }}
        >
            {children}
        </TodoContext.Provider>
    )
}

export default TodoContext
