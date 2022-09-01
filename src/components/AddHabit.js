import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { NONE } from "../actions/actionTypes";
import { addHabit } from "../actions/";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import toast, { Toaster } from "react-hot-toast";

const notify = () => {
  toast("Habit added successfully!!", {
    position: "bottom-center",
  });
};

export function AddHabit() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const handleSubmit = (e) => {
    notify();
    e.preventDefault();

    if (title) {
      const habit = {
        title,
        days: [
          {
            id: 1,
            day: "Sun",
            status: NONE,
          },
          {
            id: 2,
            day: "Mon",
            status: NONE,
          },
          {
            id: 3,
            day: "Tue",
            status: NONE,
          },
          {
            id: 4,
            day: "Wed",
            status: NONE,
          },
          {
            id: 5,
            day: "Thur",
            status: NONE,
          },
          {
            id: 6,
            day: "Fri",
            status: NONE,
          },
          {
            id: 7,
            day: "Sat",
            status: NONE,
          },
        ],
      };
      dispatch(addHabit(habit));
      const goToHome = setTimeout(() => navigate("/habit-tracker-app"), 600);
    }
  };
  return (
    <div>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1 },
          backgroundColor: "white",
          color: "#0f172a",
          marginTop: "100px",
          minHeight: "400px",
          width: "500px",
          marginX: "auto",
        }}
        onSubmit={handleSubmit}
        noValidate
        autoComplete="off"
      >
        <div>
          <div>
            <TextField
              sx={{
                marginTop: "70px",
              }}
              helperText="Please enter your Habit"
              id="demo-helper-text-misaligned"
              label="Habit"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div>
            <Button
              sx={{
                marginTop: "30px",
              }}
              type="submit"
              variant="contained"
              size="large"
            >
              Add Habit
            </Button>
            <Toaster />
          </div>
        </div>
      </Box>
    </div>
  );
}
