import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../../store'

  const savedTemp = JSON.parse(localStorage.getItem('temp') || 'true');


// Define a type for the slice state
interface TempState {
  value: boolean
}

// Define the initial state using that type
const initialState: TempState = {
  value: savedTemp,
}

export const TempSlice = createSlice({
  name: 'TempMood',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
   C: (state) => {
      state.value =true
    },
    F: (state) => {
      state.value =false
    },
   
  },
})

export const { C, F } = TempSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectTemp = (state: RootState) => state.TempMood.value

export default TempSlice.reducer