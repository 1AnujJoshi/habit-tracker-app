import { ADD_HABIT, UPDATE_STATUS } from "./actionTypes";
export const addHabit = (habit) => {
  return {
    type: ADD_HABIT,
    payload: habit,
  };
};

export const updateStatus = (status, day, title, id) => {
  return {
    type: UPDATE_STATUS,
    payload: status,
    day,
    title,
    id,
  };
};
