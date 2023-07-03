import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: {
  name: string;
  password: string;
  isLogged: boolean;
  isFirstLogIn: boolean;
} = {
  name: "",
  password: "",
  isLogged: false,
  isFirstLogIn: true,
};

const loginSlice = createSlice({
  name: "loginSlice",
  initialState,
  reducers: {
    changeName: (state, action: PayloadAction<{ name: string }>) => ({
      ...state,
      name: action.payload.name,
    }),
    changePassword: (state, action: PayloadAction<{ password: string }>) => ({
      ...state,
      password: action.payload.password,
    }),
    logIn: (state) => ({
      ...state,
      isLogged: true,
    }),
    firstLogIn: (state) => ({
      ...state,
      isFirstLogIn: false,
    }),
  },
});

export const { actions, reducer } = loginSlice;
