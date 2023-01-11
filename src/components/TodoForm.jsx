import { useState, useContext, useEffect } from "react"
import Button from "./shared/Button"
import PrioritySelect from "./PrioritySelect"
import TodoContext from "../context/TodoContext"

const TodoForm = () => {
    const [text, setText] = useState("")
    const [prior, setPrior] = useState("normal")
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [msg, setMsg] = useState("")

    const { addTodo, todoEdit, updateTodo } = useContext(TodoContext)

    useEffect(() => {
        if (todoEdit.edit) {
            setBtnDisabled(false)
            setText(todoEdit.item.text)
            setPrior(todoEdit.item.prior)
        }
    }, [todoEdit])

    const handleTextChange = (e) => {
        if (text === "") {
            setBtnDisabled(true)
            setMsg(null)
        } else if (text !== "" && text.trim().length < 10) {
            setBtnDisabled(true)
            setMsg("Text must be at least 10 characters.")
        } else {
            setMsg(null)
            setBtnDisabled(false)
        }
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (text.length >= 10) {
            const newTodo = {
                text,
                prior,
            }
            if (todoEdit.edit) {
                updateTodo(todoEdit.item.id, newTodo)
                todoEdit.edit = false
            } else {
                addTodo(newTodo)
            }
            setText("")
            setBtnDisabled(true)
        }
    }

    return (
        <div className="todo-form text-center p-4">
            <form onSubmit={handleSubmit}>
                <h2>What's on your mind?</h2>

                <PrioritySelect select={(priority) => setPrior(priority)} />

                <div className="todo-input">
                    <input
                        onChange={handleTextChange}
                        type="text"
                        placeholder="Write your todo!"
                        value={text}
                        className="form-control"
                    />
                    <Button type="submit" isDisabled={btnDisabled}>
                        Send
                    </Button>
                </div>
                {msg && <div className="message">{msg}</div>}
            </form>
        </div>
    )
}

export default TodoForm
