import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./auth-slice";
import expenseReducer from "./expense-slice";
import themeReducer from "./theme-slice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    expenseStore: expenseReducer,
    theme: themeReducer,
  },
});

export default store;
