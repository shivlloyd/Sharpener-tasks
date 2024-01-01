import { configureStore } from '@reduxjs/toolkit';

import authReducer from "./auth-slice";
import expenseReducer from "./expense-slice";

const store = configureStore({
  reducer: { auth: authReducer, expenseStore: expenseReducer },
});

export default store;
