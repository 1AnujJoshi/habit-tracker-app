import React from "react";
import { Typography } from "@mui/material";
import { Status } from "./Status";

export function Habits({ habit }) {
  return (
    <div
      style={{
        marginLeft: "10%",
        marginRight: "10%",
        marginBottom: "1%",
        color: "white",
        border: "2px solid grey",
        borderRadius: "10px",
      }}
    >
      <Typography>
        <h1>Title : {habit.title}</h1>
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
          flexWrap: "wrap",
          color: "white",
        }}
      >
        {habit.days?.map((item) => {
          return (
            <Status
              item={item}
              id={item.id}
              key={item.day}
              day={item.day}
              title={habit.title}
            />
          );
        })}
      </div>
    </div>
  );
}
