import axios from 'axios';

// Fetch all students
export const fetchStudents = () => async (dispatch) => {
  dispatch({ type: 'students/fetch/pending' });
  try {
    const response = await axios.get('/api/students');
    dispatch({
      type: 'students/fetch/fulfilled',
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: 'students/fetch/rejected',
      payload: error.message,
    });
  }
};

// Add a new student
export const addStudent = (studentData) => async (dispatch) => {
  dispatch({ type: 'students/add/pending' });
  try {
    const response = await axios.post('/api/students', studentData);
    dispatch({
      type: 'students/add/fulfilled',
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: 'students/add/rejected',
      payload: error.message,
    });
  }
};

// Update a student
export const updateStudent = (studentData) => async (dispatch) => {
  dispatch({ type: 'students/update/pending' });
  try {
    const response = await axios.put(`/api/students/${studentData.id}`, studentData);
    dispatch({
      type: 'students/update/fulfilled',
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: 'students/update/rejected',
      payload: error.message,
    });
  }
};

// Delete a student
export const deleteStudent = (studentId) => async (dispatch) => {
  dispatch({ type: 'students/delete/pending' });
  try {
    await axios.delete(`/api/students/${studentId}`);
    dispatch({
      type: 'students/delete/fulfilled',
      payload: studentId,
    });
  } catch (error) {
    dispatch({
      type: 'students/delete/rejected',
      payload: error.message,
    });
  }
};
