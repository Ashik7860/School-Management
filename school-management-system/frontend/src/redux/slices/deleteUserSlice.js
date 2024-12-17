import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk for deleting a user
export const deleteUserByEmail = createAsyncThunk(
  "user/deleteUserByEmail",
  async (email, { rejectWithValue, getState }) => { // Include getState here
    try {
      
      const token = localStorage.getItem("token");

      if (!token) {
        throw new Error("Unauthorized: Token is missing");
      }

      const config = {
        headers: {
          Authorization: `Bearer ${token}`, 
          "Content-Type": "application/json",
        },
      };

      // API call with token included in headers
      const response = await axios.post(
        "http://localhost:5000/school-management/deleteUser",
        { email }, // Request body
        config
      );

      return response.data.message; // Return success message
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data.message : error.message
      );
    }
  }
);

// Slice to manage delete user state
const deleteUserSlice = createSlice({
  name: "deleteUser",
  initialState: {
    loading: false,
    successMessage: "",
    errorMessage: "",
  },
  reducers: {
    resetDeleteState: (state) => {
      state.loading = false;
      state.successMessage = "";
      state.errorMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(deleteUserByEmail.pending, (state) => {
        state.loading = true;
        state.successMessage = "";
        state.errorMessage = "";
      })
      .addCase(deleteUserByEmail.fulfilled, (state, action) => {
        state.loading = false;
        state.successMessage = action.payload; // Success message
      })
      .addCase(deleteUserByEmail.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage = action.payload; // Error message
      });
  },
});

export const { resetDeleteState } = deleteUserSlice.actions;
export default deleteUserSlice.reducer;
