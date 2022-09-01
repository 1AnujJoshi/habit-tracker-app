import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { Habits } from "./Habits";
import { useSelector } from "react-redux";
export function Home() {
  const habits = useSelector((state) => state.habits);

  return (
    <div>
      {habits.length === 0 ? (
        <Box sx={{ margin: 30 }}>
          <Typography
            variant="h5"
            color={"white"}
            fontFamily={"sans-serif"}
            component={"div"}
          >
            Motivation is what gets you started. Habit is what keeps you going
            !! - Jim Ryun
          </Typography>
          <div>
            <Link to="/addHabit" style={{ textDecoration: "none" }}>
              <Button
                sx={{ margin: 1, color: "#0f172a" }}
                variant="contained"
                color="inherit"
              >
                Get Started
              </Button>
            </Link>
          </div>
        </Box>
      ) : null}

      {habits.map((habit) => (
        <Habits habit={habit} key={habit.title} />
      ))}
    </div>
  );
}
