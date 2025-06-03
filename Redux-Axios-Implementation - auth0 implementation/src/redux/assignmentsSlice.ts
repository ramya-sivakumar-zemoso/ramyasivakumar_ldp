import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export type Assignment = {
  id: string;
  name: string;
  completed: boolean;
};

type AssignmentsState = {
  data: Assignment[];
  loading: boolean;
  error: string | null;
};

const initialState: AssignmentsState = {
  data: [],
  loading: false,
  error: null,
};

export const fetchAssignments = createAsyncThunk(
  'assignments/fetchAssignments',
  async () => {
    const response = await axios.get<Assignment[]>(
      'http://localhost:3001/assignments'
    );
    return response.data;
  }
);

const assignmentsSlice = createSlice({
  name: 'assignments',
  initialState,
  reducers: {
    markCompleted: (state, action) => {
      const assignment = state.data.find((a) => a.id === action.payload);
      if (assignment) {
        assignment.completed = true;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAssignments.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
  },
});

export const { markCompleted } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
