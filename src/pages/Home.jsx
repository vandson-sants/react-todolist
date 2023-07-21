import { Container, List } from "@mui/material";
import React, { useState } from "react";
import Form from "../components/form/Form";
import TaskList from "../components/list-item/List-item";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (id) => {
    let filtered = tasks.filter((task) => task.id !== id);
    setTasks(filtered); 
  }

  const editTask = (id, editedText) => {
    let tasksArray = [...tasks];

    for (let i in tasksArray) {
      if (tasksArray[i].id === id) {
        tasksArray[i].text = editedText;       
      }
    }

    setTasks(tasksArray);
  }

  return (
    <Container
      maxWidth="xs"
      style={{ background: "gray", marginTop: "20px", marginBottom: "20px", padding: "2rem"}}
    >
      <Form addTask = {addTask} />
      <List sx={{ marginTop: "2rem" }}>
        {tasks.map((task) => (
          <div key={task.id} style={{ marginTop: "10px" }}>
            <TaskList task={task} deleteTask={deleteTask} editTask={editTask} />
          </div>
        ))}
      </List>
    </Container>
  );
}
