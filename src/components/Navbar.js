import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";

import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "#0f172a" }}>
      <AppBar position="static" sx={{ backgroundColor: "#181c25" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Link to="/habit-tracker-app">
              <HomeIcon fontSize="large" sx={{ color: "white" }} />
            </Link>
          </IconButton>
          <Typography
            variant="h3"
            component="div"
            color="#56a167"
            sx={{ flexGrow: 1, fontFamily: "sans-serif" }}
          >
            HABIT TRACKER
          </Typography>
          <Link to="/addHabit" style={{ textDecoration: "none" }}>
            <Button sx={{ color: "white" }}>
              <h3>Add Habit</h3>
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
