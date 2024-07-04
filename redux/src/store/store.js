import { configureStore } from '@reduxjs/toolkit'
import countReducer from './counter/Counter'

export const store = configureStore({
  reducer: {
    counter:countReducer,
  },
})