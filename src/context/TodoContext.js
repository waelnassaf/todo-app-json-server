import { createContext, useState, useEffect } from "react"

const TodoContext = createContext()

export const TodoProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [todos, setTodos] = useState([])

    const [todoEdit, setTodoEdit] = useState({
        item: {},
        edit: false,
    })

    useEffect(() => {
        fetchTodos()
    }, [])

    //Fetch todos.
    const fetchTodos = async () => {
        const response = await fetch("/todos?_sort=id&_order=desc")
        const data = await response.json()
        setTodos(data)
        setIsLoading(false)
    }

    const addTodo = async (newTodo) => {
        const response = await fetch("/todos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newTodo),
        })
        const data = await response.json()
        setTodos([data, ...todos])
    }

    //Set item to be updated.
    const editTodo = (item) => {
        setTodoEdit({ item, edit: true })
    }

    const updateTodo = async (id, updatedItem) => {
        const response = await fetch(`/todos/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedItem),
        })
        const data = await response.json()
        setTodos(todos.map((todo) => (todo.id === id ? data : todo)))
    }

    const deleteTodo = async (id) => {
        if (window.confirm("Are you sure you want to delete this todo?")) {
            await fetch(`/todos/${id}`, {
                method: "DELETE",
            })
            setTodos(todos.filter((todo) => todo.id !== id))
        }
    }

    return (
        <TodoContext.Provider
            value={{
                todos,
                todoEdit,
                isLoading,
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
