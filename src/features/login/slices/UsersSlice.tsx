import { createSlice } from "@reduxjs/toolkit";

const initialState: { name: string; password: string }[] = [
  { name: "123", password: "123" },
];

const userSlice = createSlice({
  name: "usersSlice",
  initialState,
  reducers: {},
});

export const { actions, reducer } = userSlice;
