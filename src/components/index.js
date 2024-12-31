import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./Slices/Weather";

const store = configureStore({
  reducer: {
    weather: weatherReducer,
  },
});

export default store;
