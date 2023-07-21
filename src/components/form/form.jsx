import React, { useState } from "react";
import { Paper, TextField } from "@mui/material";
import { Button } from "@mui/material";

function Form( {addTask} ) {
  const [text, setText] = useState(null);
  const [id, setId] = useState(0);

  const taskCreate = (text) => {
    const taskObject = { text: text, id: id};
    setId(id + 1);
    addTask(taskObject);
    document.getElementById("filled-basic").value = null;   //limpar
  };

  
  return (
    <Paper style={{ padding: "4rem" }}>
      <div style={{ display: "grid" }}>
        <TextField id="filled-basic" label="Tarefas..." variant="filled"
          onChange={(e) => setText(e.target.value)} /> 
          {/* conforme escreve, manda para text */}
          <Button variant="contained" onClick={() => taskCreate(text)} style={{ marginTop: "1rem" }} >
            Adicionar
          </Button>
      </div>
    </Paper>
  );
}

export default Form;
