import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to fetch student details
export const fetchStudents = createAsyncThunk(
  "students/fetchStudents",
  async (_, { rejectWithValue }) => {
    try {
      // API call to fetch student details
      const response = await axios.get("http://localhost:5000/school-management/studentDetails");
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data.message : error.message
      );
    }
  }
);

const studentSlice = createSlice({
  name: "students",
  initialState: {
    students: [], // Store student details
    loading: false,
    errorMessage: "",
  },
  reducers: {
    resetState: (state) => {
      state.students = [];
      state.loading = false;
      state.errorMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchStudents.pending, (state) => {
        state.loading = true;
        state.errorMessage = "";
      })
      .addCase(fetchStudents.fulfilled, (state, action) => {
        state.loading = false;
        state.students = action.payload; // Store fetched data
      })
      .addCase(fetchStudents.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage = action.payload; // Handle error
      });
  },
});

export const { resetState } = studentSlice.actions;
export default studentSlice.reducer;
