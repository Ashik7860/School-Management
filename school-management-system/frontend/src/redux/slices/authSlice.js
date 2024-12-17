import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    isAuthenticated: false,
  };

  const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      login: (state, action) => {
        state.user = action.payload; // Set the user
        state.isAuthenticated = true; // Set authentication to true
        console.log(JSON.stringify(state, null, 2));
      },
      logout: (state) => {
        state.user = null; // Clear the user
        state.isAuthenticated = false; // Set authentication to false
      },
    },
  });
  
  export const { login, logout } = authSlice.actions; // Export actions
  export default authSlice.reducer; // Export reducer