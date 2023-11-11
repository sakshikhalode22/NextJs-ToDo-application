import { Typography } from "@mui/material";
import AddTasks from "./pages/AddTasks";

const style = {
  backgroundColor: "white",
  height: "102vh",
  width: "100vw",
  color: "black",
  justifyContent: "center",
  alignItems: "center",
  padding: "10px",
};

export default function Home() {
  return (
    <div style={style}>
      {/* heading for welcoming user in todo app */}
      <Typography variant="h4" gutterBottom sx={{ textAlign: "center" }}>
        Welcome to Todo App
      </Typography>
      {/* subHeading */}
      <Typography variant="h6" gutterBottom sx={{ textAlign: "center" }}>
        Please add your todo tasks
      </Typography>
      {/* add task component */}
      <AddTasks />
    </div>
  );
}
