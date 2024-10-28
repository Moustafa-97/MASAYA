// src/features/location/locationSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the interface
interface IState {
  location: string;
}

// Initial state
const initialState: IState = {
  location: "/",
};

// Create slice
const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setLocation: (state, action: PayloadAction<string>) => {
      state.location = action.payload;
    },
    resetLocation: (state) => {
      state.location = "/";
    },
  },
});

// Export actions
export const { setLocation, resetLocation } = locationSlice.actions;

// Export reducer by default
export default locationSlice.reducer;
