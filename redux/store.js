import { configureStore } from '@reduxjs/toolkit'
import counter from "./slices/counter.slice"
export const store = configureStore({
  reducer: {
    counter
  },
})