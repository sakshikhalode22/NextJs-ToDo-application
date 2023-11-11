"use client"; // This is a client component
import React, { useState, useEffect } from "react";
import {
  Grid,
  FormControl,
  FormLabel,
  TextField,
  Button,
  Stack,
  Typography,
  Alert,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

import { AddTask } from "@mui/icons-material";
import AllTasks from "./AllTasks";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B, #FF8E53)",
    border: 0,
    borderRadius: "10px",
    color: "white",
    padding: "10px",
  },
});

const AddTasks = () => {
  const classes = useStyles();
  const [task, setTask] = useState("");
  const [tasksArray, setTasksArray] = useState([]);

  const [successMsg, setSuccessMsg] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setSuccessMsg("");
    }, 4000);
  }, [successMsg]);

  const inputChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.trim()) {
      const newTask = {
        task: task,
        completed: false,
      };
      setTasksArray([...tasksArray, newTask]);
      setTask("");
      // task added success
      setSuccessMsg("Task Added Successfully!");
    }
  };

  const handleCompleted = (index) => {
    const newTasks = [...tasksArray];
    newTasks[index].completed = !newTasks[index].completed;
    setTasksArray(newTasks);
    // task completed success
    setSuccessMsg("Task Completed Successfully!");
  };

  const handleDelete = (index) => {
    setTasksArray(tasksArray.filter((_, i) => i !== index));
    // task deleted success
    setSuccessMsg("Task Deleted Successfully!");
  };

  const handleDeleteAll = () => {
    // if no data alert there is no data
    if (Object.keys(tasksArray).length === 0) {
      alert("There is no data to delete!");
      return;
    }
    //prompt alert
    if (window.confirm("Are you sure to delete all tasks?")) {
      setTasksArray([]);
    }
  };

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        style={{ marginTop: "10px" }}
      >
        <Grid item xs={4} className={classes.root}>
          <FormControl>
            <Stack direction="row">
              <FormLabel>
                <Typography variant="h6" sx={{ textAlign: "center" }}>
                  Add Task:
                </Typography>
              </FormLabel>

              <TextField
                variant="standard"
                type="text"
                size="small"
                color="primary"
                placeholder="Enter Task"
                value={task}
                onChange={inputChange}
                sx={{ marginLeft: "20px" }}
              />

              <Button
                variant="contained"
                color="primary"
                size="small"
                onClick={handleSubmit}
                sx={{ marginLeft: "20px" }}
              >
                <AddTask />
              </Button>
            </Stack>
          </FormControl>
        </Grid>
        <Grid
          item
          xs={12}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          {/* success message */}

          {successMsg !== "" ? (
            <Alert variant="filled" severity="success" size="small">
              {successMsg}
            </Alert>
          ) : null}
        </Grid>
      </Grid>
      {/* add task component (child component) with props */}
      <AllTasks
        tasks={tasksArray}
        handleCompleted={handleCompleted}
        handleDelete={handleDelete}
        handleDeleteAll={handleDeleteAll}
      />
    </>
  );
};

export default AddTasks;
