import * as React from "react";
import { useState } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";
import { Paper } from "@mui/material";
import EditTaskDialog from "../dialog-alert-edit-tasks/Edit-task-dialog";

export default function TaskList( {task, deleteTask, editTask} ) {
  const [openDialog, setOpenDialog] = useState(false);

  const handlerCloseDialog = () => {
    setOpenDialog(!openDialog);
  }
  return (
    <>
    <EditTaskDialog editTask={editTask} open={openDialog} handlerCloseDialog={handlerCloseDialog} task={task} />
    <Paper style={{ padding: "1rem 0rem"}}>
      <ListItem
        secondaryAction={
          <IconButton edge="end" aria-label="delete" onClick={() => deleteTask(task.id)}>
            <ClearIcon />
          </IconButton>
        }
        disablePadding
      >
        <ListItemButton role={undefined} dense>
          <ListItemIcon>
            <Checkbox edge="start" tabIndex={-1} disableRipple />
          </ListItemIcon>
          <ListItemText primary={task.text} onClick={() => setOpenDialog(true)}/>
        </ListItemButton>
      </ListItem>
    </Paper>
    </>
  );
}
