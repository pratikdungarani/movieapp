import React, { useState } from "react";
import { Typography, Container } from "@mui/material";
import TodoList from "common/TodoList/TodoList";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import useStyles from "./style";
import { Box, Button } from "@mui/material";
import { addItem, removeItem } from "store/reducers/todoreducer";
import { useSelector, useDispatch } from "react-redux";

function TodoApp() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const listData = useSelector((state) => state?.todoData?.data);
  const [user, setUser] = useState("");
  const RemoveList = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <Container>
      <Typography
        component="h4"
        color="neutral.main"
        className={classes.TodoTitle}
      >
        {" "}
        To do App{" "}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box className={classes.fieldWrap}>
            <input
              type="text"
              name="item"
              value={user}
              placeholder="Add Items"
              className={classes.textField}
              onChange={(e) => setUser(e.target.value)}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Button
            variant="outlined"
            color="success"
            onClick={() => {
              dispatch(
                addItem({ id: Math.floor(Math.random() * 100000), name: user })
              );
              setUser("");
            }}
          >
            Add
          </Button>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <List className={classes.ListRow}>
            {listData?.map((list, i) => (
              <TodoList
                key={i}
                name={list?.name}
                id={list?.id}
                DeleteList={RemoveList}
              />
            ))}
          </List>
        </Grid>
      </Grid>
    </Container>
  );
}

export default TodoApp;
