import {configureStore} from '@reduxjs/toolkit';

const store = confgureStore({
  reducer: {
    auth: authSlice
  }
});
