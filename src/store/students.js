import { createSlice } from '@reduxjs/toolkit';

const studentsSlice = createSlice({
  name: 'students',
  initialState: {
    studentsList: [],
    searchQuery: '',
  },
  reducers: {
    addStudent: (state, action) => {
      state.studentsList.push(action.payload);
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    deleteStudent: (state, action) => {
      state.studentsList = state.studentsList.filter((_, index) => index !== action.payload);
    },
  },
});

export const { addStudent, setSearchQuery, deleteStudent } = studentsSlice.actions;
export default studentsSlice.reducer;
