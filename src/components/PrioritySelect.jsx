import { useState, useContext, useEffect, useRef } from "react"
import TodoContext from "../context/TodoContext"

const PrioritySelect = ({ select }) => {
    const [selected, setSelected] = useState("normal")

    const listRef = useRef()
    const { todoEdit } = useContext(TodoContext)

    useEffect(() => {
        if (todoEdit.edit) setSelected(todoEdit.item.prior)
    }, [todoEdit])

    useEffect(() => {
        Array.from(listRef.current.querySelectorAll("label")).map(
            (option) => (option.className = "")
        )
        listRef.current.querySelector(`[for="${selected}"]`).className =
            "active"
    }, [selected])

    const handleChange = (e) => {
        setSelected(e.currentTarget.value)
        select(e.currentTarget.value)
    }

    return (
        <ul className="priority my-4 row" ref={listRef}>
            <li className="col-12 col-sm-4 mt-3 mt-sm-0">
                <label htmlFor="normal">Normal</label>
                <input
                    type="radio"
                    id="normal"
                    value="normal"
                    onChange={handleChange}
                    checked={selected === "normal"}
                />
            </li>
            <li className="col-12 col-sm-4 mt-3 mt-sm-0">
                <label htmlFor="medium">Medium</label>
                <input
                    type="radio"
                    id="medium"
                    value="medium"
                    onChange={handleChange}
                    checked={selected === "medium"}
                />
            </li>
            <li className="col-12 col-sm-4 mt-3 mt-sm-0">
                <label htmlFor="high">High</label>
                <input
                    type="radio"
                    id="high"
                    value="high"
                    onChange={handleChange}
                    checked={selected === "high"}
                />
            </li>
        </ul>
    )
}

export default PrioritySelect
