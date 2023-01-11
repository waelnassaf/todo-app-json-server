import { useContext } from "react"
import TodoContext from "../context/TodoContext"

const TodoStats = () => {
    const { todos } = useContext(TodoContext)

    return (
        <div className="todo-stats text-center my-4">
            <h4>{todos.length} Todos</h4>
        </div>
    )
}

export default TodoStats
