import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  success: false,
  error: null,
};

const passwordSlice = createSlice({
  name: 'password',
  initialState,
  reducers: {
    passwordChangeRequest: (state) => {
      state.loading = true;
      state.success = false;
      state.error = null;
    },
    passwordChangeSuccess: (state) => {
      state.loading = false;
      state.success = true;
    },
    passwordChangeFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { passwordChangeRequest, passwordChangeSuccess, passwordChangeFailure } = passwordSlice.actions;
export default passwordSlice.reducer;
