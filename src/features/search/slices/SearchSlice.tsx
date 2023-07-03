import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: {
  searchValue: string;
  searchCategory: string;
} = {
  searchValue: "",
  searchCategory: "all products",
};

const searchSlice = createSlice({
  name: "searchSlice",
  initialState,
  reducers: {
    changeCategory: (state, action: PayloadAction<{ category: string }>) => ({
      ...state,
      searchCategory: action.payload.category,
    }),
    changeValue: (state, action: PayloadAction<{ value: string }>) => ({
      ...state,
      searchValue: action.payload.value,
    }),
  },
});

export const { actions, reducer } = searchSlice;
