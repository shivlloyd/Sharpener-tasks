import { createStore } from "redux";

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "INCREMENT") {
    return {
      counter: state.counter + 2,
    };
  }

  if (action.type === "DECREMENT") {
    return {
      counter: state.counter - 2,
    };
  }

  if (action.type === "INCREMENTBY5") {
    return {
      counter: state.counter + 5,
    };
  }

  if (action.type === "DECREMENTBY5") {
    return {
      counter: state.counter - 5,
    };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
