import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'



// Define a type for the slice state
interface ErrorState {
  value: boolean
}

// Define the initial state using that type
const initialState: ErrorState = {
  value: false,
}

export const ErrorSlice = createSlice({
  name: 'ErrorMood',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
   Ey: (state) => {
      state.value =true
    },
    En: (state) => {
      state.value =false
    },
   
  },
})

export const { Ey, En } = ErrorSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectError = (state: RootState) => state.ErrorMood.value

export default ErrorSlice.reducer