import * as React from "react";
import { updateStatus } from "../actions/index";
import { DONE, NONE, NOT_DONE } from "../actions/actionTypes";
import { useDispatch } from "react-redux";
import { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import { Typography } from "@mui/material";

export function Status({ item, day, title, id }) {
  const dispatch = useDispatch();
  const [status, setStatus] = useState(item.status);
  const changeStatus = () => {
    if (item.status === DONE) {
      setStatus(NOT_DONE);
    } else if (item.status === NOT_DONE) {
      setStatus(NONE);
    } else {
      setStatus(DONE);
    }
    dispatch(updateStatus(item.status, day, title, id));
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#b4d8b5",
        color: "#0f172a",
        border: ".5px solid lightgrey",
        width: "12%",
        height: "12%",
        margin: "10px",
        borderRadius: "10px",
        cursor: "pointer",
      }}
      onClick={() => changeStatus()}
    >
      <div>
        <Typography variant="h4">{day}</Typography>
        <Tooltip title="Change status!!">
          <div
            style={{
              height: "100px",
              width: "100%",
              backgroundColor: "cream",
            }}
          >
            {status === DONE ? (
              <DoneIcon color="success" sx={{ fontSize: "80px" }} />
            ) : null}
            {status === NOT_DONE ? (
              <CloseIcon color="warning" sx={{ fontSize: "80px" }} />
            ) : null}
            {status === NONE ? " " : null}
          </div>
        </Tooltip>
      </div>
    </div>
  );
}
