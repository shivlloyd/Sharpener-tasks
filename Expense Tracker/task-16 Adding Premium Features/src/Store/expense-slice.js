import { createSlice } from "@reduxjs/toolkit";

const initialExpenseState = {
  items: [],
  editItems: null,
};

const expenseSlice = createSlice({
  name: "expenses",
  initialState: initialExpenseState,
  reducers: {
    addItem(state, action) {
      state.items = [action.payload, ...state.items];
    },
    removeItem(state, action) {
      const itemId = action.payload.id;
      state.items = state.items.filter((item) => item.id !== itemId);
    },
    editItem(state, action) {
      state.editItems = action.payload.item;
      state.items = state.items.map((expense) =>
        expense.id === state.editItems.id ? state.editItems : expense
      );
    },
    setItems(state, action) {
      state.items = action.payload;
    },
    setEditItemsNull(state) {
      state.editItems = null;
    },
    setItemsEmpty(state) {
      state.items = [];
    },
  },
});

export const expenseActions = expenseSlice.actions;

export default expenseSlice.reducer;
