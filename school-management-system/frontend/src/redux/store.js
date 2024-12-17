import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import authReducer from './slices/authSlice';
import passwordReducer from './slices/passwordSlice';
import deleteUserReducer from "./slices/deleteUserSlice"
import studentReducer from "./slices/studentSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer,
    password: passwordReducer,
    deleteUser: deleteUserReducer,
    students: studentReducer,  },
});

export default store;
