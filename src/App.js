import Form from "./components/Form";
import Todo from "./components/Todo";
import {useEffect, useState} from "react";
import { nanoid } from "nanoid";
import Search from "./components/Search";
import {Container} from "./style/Container";
import styled from "styled-components";
import {Heading} from "./style/Heading";


const Ul = styled.ul`
      list-style-type: none;
      margin: 0;
      padding: 0;
`


function App() {
    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')));
    const [search, setSearch] = useState("");
    function addTask(name) {
        const newTask = { id: `todo-${nanoid()}`, name };
        setTasks([...tasks, newTask]);
    }

    function searchTask(search) {
        setSearch(search)
    }

    function deleteTask(id) {
        const remainingTasks = tasks.filter((task) => id !== task.id);
        setTasks(remainingTasks);
    }

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks]);


    const taskList = tasks
        .filter((task) => (search === "" ? true : task.name === search))
        .map((task) => (
        <Todo
            id={task.id}
            name={task.name}
            key={task.id}
            deleteTask={deleteTask}
        />
    ));

    return (
        <Container>
            <h1>TodoList</h1>
            <Heading>Add new task</Heading>
            <Container>
                <Form addTask={addTask} />
            </Container>
            <Heading>Search task</Heading>
            <Container>
                <Search searchTask={searchTask}/>
            </Container>
            <Heading>List of task</Heading>
            <Ul>
                {taskList}
            </Ul>
        </Container>
    );
}

export default App;