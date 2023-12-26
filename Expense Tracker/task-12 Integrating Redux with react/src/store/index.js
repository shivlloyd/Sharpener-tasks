import { crearteStore } from "redux";

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "INCREMENTBY2") {
    return {
      counter: state.counter + 2,
    };
  }

  if (action.type === "DECREMENTBY2") {
    return {
      counter: state.counter - 2,
    };
  }

  return state;
};

const store = crearteStore(counterReducer);

export default store;
