import { Container } from "@mui/material";
import "./App.css";
import Form from "./components/form/form";
import TaskList from "./components/list-item/list-item";

function App() {
  return (
    <Container maxWidth="xs" style={{marginTop:"20px"}}>
      <Form></Form>
      <TaskList></TaskList>
    </Container>
  );
}

export default App;
