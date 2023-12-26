import { useState } from "react";
import {MyButton} from "../style/Button";


function Search(props) {
    const [name, setName] = useState("");
    function handleChange(event) {
        setName(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        props.searchTask(name);
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
                Search
            </button>
        </form>
    );
}

export default Search;