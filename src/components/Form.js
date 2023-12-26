import { useState } from "react";
import {MyButton} from "../style/Button";

function Form(props) {
    const [name, setName] = useState("");
    function handleChange(event) {
        setName(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        props.addTask(name);
        setName("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={name}
                onChange={handleChange}
            />
            <button type="submit">
                Add
            </button>
        </form>
    );
}

export default Form;