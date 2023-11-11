import React, { useEffect, useState } from "react";
import {
  Grid,
  Button,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import { makeStyles } from "@mui/styles";

import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import WarningIcon from "@mui/icons-material/Warning";
import CircleIcon from "@mui/icons-material/Circle";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B, #FF8E53)",
    border: 0,
    borderRadius: "10px",
    color: "white",
    padding: "10px",
    height: "300px",
    overflowY: "scroll",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
});

const AllTasks = (props) => {
  const classes = useStyles();

  // get tasks from props
  const allTasks = props.tasks;

  const [pendingTasks, setPendingTasks] = useState([]);
  console.log(pendingTasks.length);
  const [completedTasks, setCompletedTasks] = useState([]);

  // get pending tasks
  useEffect(() => {
    const pendingTasks = allTasks.filter((task) => task.completed === false);
    setPendingTasks(pendingTasks);

    const completedTasks = allTasks.filter((task) => task.completed === true);
    setCompletedTasks(completedTasks);
  }, [allTasks]);

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={1}
      style={{ marginTop: "10px", gap: 15 }}
    >
      <Grid item xs={5} sm={5} md={5} lg={5} className={classes.root}>
        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            textAlign: "center",
            margin: "auto",
          }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={"Pending Tasks"}
        >
          {pendingTasks.length !== 0 ? (
            pendingTasks.map((task, index) => {
              return (
                <div key={index}>
                  <div>
                    <ListItemButton>
                      <ListItemIcon>
                        <WarningIcon color="warning" />
                      </ListItemIcon>

                      <ListItemText primary={task.task} />
                      <Button
                        variant="contained"
                        color="success"
                        onClick={() => props.handleCompleted(index)}
                      >
                        <CheckCircleIcon />
                      </Button>
                      <Button
                        variant="contained"
                        color="error"
                        onClick={() => props.handleDelete(index)}
                        sx={{
                          marginLeft: "15px",
                        }}
                      >
                        <DeleteIcon />
                      </Button>
                    </ListItemButton>
                  </div>
                </div>
              );
            })
          ) : (
            <div>
              <ListItemText
                sx={{ marginTop: "100px" }}
                primary={"No Pending Tasks"}
              />
            </div>
          )}
        </List>
      </Grid>
      <Grid item xs={5} sm={5} md={5} lg={5} className={classes.root}>
        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            textAlign: "center",
            margin: "auto",
          }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={"Completed Tasks"}
        >
          {completedTasks.length !== 0 ? (
            completedTasks.map((task, index) => {
              return (
                <div key={index}>
                  <div>
                    <ListItemButton>
                      <ListItemIcon>
                        <WarningIcon color="warning" />
                      </ListItemIcon>

                      <ListItemText primary={task.task} />
                      <Button
                        variant="contained"
                        color="success"
                        onClick={() => props.handleCompleted(index)}
                      >
                        <CheckCircleIcon />
                      </Button>
                      <Button
                        variant="contained"
                        color="error"
                        onClick={() => props.handleDelete(index)}
                        sx={{
                          marginLeft: "15px",
                        }}
                      >
                        <DeleteIcon />
                      </Button>
                    </ListItemButton>
                  </div>
                </div>
              );
            })
          ) : (
            <div>
              <ListItemText
                sx={{ marginTop: "100px" }}
                primary={"No Completed Tasks"}
              />
            </div>
          )}
        </List>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        sx={{ margin: "0 90px 0 90px" }}
      >
        <Button
          variant="contained"
          color="error"
          size="small"
          sx={{
            width: "100%",
          }}
          onClick={props.handleDeleteAll}
        >
          Clear all
        </Button>
      </Grid>
    </Grid>
  );
};

export default AllTasks;
