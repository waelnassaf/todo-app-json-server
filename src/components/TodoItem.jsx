import { FaEdit, FaTimes } from "react-icons/fa"
import PropTypes from "prop-types"
import { useContext } from "react"
import TodoContext from "../context/TodoContext"

const TodoItem = ({ todo }) => {
    const { deleteTodo, editTodo } = useContext(TodoContext)

    return (
        <div className="todo-item-card">
            <div className={todo.prior + "-prior"}></div>
            <button className="close" onClick={() => deleteTodo(todo.id)}>
                <FaTimes color="darkred" />
            </button>
            <button className="edit" onClick={() => editTodo(todo)}>
                <FaEdit color="darkred" />
            </button>
            <div className="text-display">{todo.text}</div>
        </div>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
}

export default TodoItem
