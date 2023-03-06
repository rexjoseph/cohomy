import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
    registerError: false,
    success: false,
  },
  reducers: {
    // REGISTER
    registerStart: (state) => {
      state.isFetching = true;
    },
    registerSuccess: (state, action) => {
      state.isFetching = false
    },
    registerFailure: (state) => {
      state.isFetching = false;
      state.registerError = true;
    },
    // LOGIN
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.success = true;
      state.error = false;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
      state.success = false;
    },

    // LOGOUT
    logoutStart: (state) => {
      state.currentUser = null
    }
  }
})

export const {
  registerStart,
  registerSuccess,
  registerFailure,
  loginStart,
  loginSuccess,
  loginFailure,
  logoutStart
} = userSlice.actions;
export default userSlice.reducer;