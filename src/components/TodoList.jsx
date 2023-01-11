import TodoItem from "./TodoItem"
import { motion, AnimatePresence } from "framer-motion"
import { useContext } from "react"
import TodoContext from "../context/TodoContext"
import Spinner from "./shared/Spinner"

const TodoList = () => {
    const { todos, isLoading } = useContext(TodoContext)

    if (!isLoading && (!todos || todos.length === 0))
        return <p>No Todos for you!</p>

    return isLoading ? (
        <Spinner />
    ) : (
        <div className="todos-list">
            <AnimatePresence>
                {todos.map((todo) => (
                    <motion.div
                        key={todo.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <TodoItem key={todo.id} todo={todo} />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    )
}

export default TodoList
