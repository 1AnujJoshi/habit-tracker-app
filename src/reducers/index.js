import {
  ADD_HABIT,
  UPDATE_STATUS,
  DONE,
  NOT_DONE,
  NONE,
} from "../actions/actionTypes";

const initialState = {
  habits: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_HABIT:
      return {
        habits: [...state.habits, action.payload],
      };
    case UPDATE_STATUS:
      const i = state.habits
        .map((e) => {
          return e.title;
        })
        .indexOf(action.title);
      if (action.payload === DONE) {
        state.habits[i].days[action.id - 1].status = NOT_DONE;
      } else if (action.payload === NOT_DONE) {
        state.habits[i].days[action.id - 1].status = NONE;
      } else if (action.payload === NONE) {
        state.habits[i].days[action.id - 1].status = DONE;
      }
      return state;
    default:
      return state;
  }
};

export default reducer;
