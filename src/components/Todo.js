import styled from "styled-components";
import {MyButton} from "../style/Button";

const Div = styled.div`
    margin-bottom: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

function Todo(props) {
    return (
        <li>
            <Div>
                <div>
                    <label>
                        {props.name}
                    </label>
                </div>
                <div>
                    <button type="button" onClick={() => props.deleteTask(props.id)}>
                        Delete
                    </button>
                </div>
            </Div>
        </li>
    );
}


export default Todo;