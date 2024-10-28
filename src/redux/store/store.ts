// src/app/store.ts
import { configureStore } from "@reduxjs/toolkit";
import locationSlice from "../features/location/locationSlice";  // <-- Import only the reducer

export const store = configureStore({
  reducer: {
    location: locationSlice,  // Use only the reducer here
  },
});

// Define types for the Redux store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
