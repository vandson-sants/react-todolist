import React from "react";
import { Paper, TextField } from "@mui/material";
import ButtonAdd from "../buttons/button";

function Form() {
    return (
        <Paper style={{padding:"4rem"}}>
            <div style={{display: "grid"}}>
                <TextField id="filled-basic" label="Tarefas..." variant="filled" />
                <ButtonAdd/>
            </div>
        </Paper>
    )
}


export default Form;