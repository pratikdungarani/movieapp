import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import useStyles from "./style";

const TodoList = ({ name, id, DeleteList }) => {
  const classes = useStyles();
  return (
    <>
      {/* <List className={classes.ListRow}> */}
      <ListItem
        className={classes.ListRow}
        secondaryAction={
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => DeleteList(id)}
          >
            <DeleteIcon className={classes.DeleteButton} />
          </IconButton>
        }
      >
        <ListItemText primary={name} className={classes.ListText} />
      </ListItem>
      {/* </List> */}
    </>
  );
};

export default TodoList;
