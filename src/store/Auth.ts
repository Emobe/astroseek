import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

interface AuthState {
  loading: boolean;
  error: string | null;
  user: any | null;
}

const initialState: AuthState = {
  loading: false,
  error: null,
  user: null
}

const loginUser = createAsyncThunk('auth/loginUser',
  async (userData, thunkApi) => {
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(loginUser.pending, state => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, state => {
        state.loading = false;
        state.error = null;
      });
  }
});
