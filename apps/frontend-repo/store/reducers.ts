import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../apis/user';

interface UserState {
  data: User[];
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  data: [],
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    fetchUserStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchUserSuccess(state, action: PayloadAction<User[]>) {
      state.data = action.payload;
      state.loading = false;
    },
    fetchUserFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.loading = false;
    },
    updateUserStart(state) {
      state.loading = true;
      state.error = null;
    },
    updateUserSuccess(state, action: PayloadAction<User>) {
      const index = state.data.findIndex((user) => user.id === action.payload.id);
      if (index !== -1) {
        state.data[index] = action.payload;
      }
      state.loading = false;
    },
    updateUserFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  fetchUserStart,
  fetchUserSuccess,
  fetchUserFailure,
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
} = userSlice.actions;

export default userSlice.reducer;
