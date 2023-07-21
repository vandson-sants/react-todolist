import * as React from 'react';
import { useState } from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@mui/material';

export default function EditTaskDialog( {open, handlerCloseDialog, task, editTask} ) {
  
  const [editedText, setEditedText] = useState(task.text);
  const textHandler = () => {
    editTask(task.id, editedText);
    handlerCloseDialog();
  }


  return (
    <div>
      <Dialog
        open={open}
        onClose={handlerCloseDialog} //clilcar fora fechar
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
      >
        <DialogTitle id="alert-dialog-title">
          {"Edição da tarefa"}
        </DialogTitle>
        <DialogContent>
         <TextField fullWidth defaultValue={editedText} onChange={(e) => setEditedText(e.target.value)}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handlerCloseDialog}>Cancelar</Button>  
          <Button onClick={textHandler}>
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
