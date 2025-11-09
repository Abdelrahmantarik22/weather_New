import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../../store'



  const savedPrecip = JSON.parse(localStorage.getItem('precip') || 'true');


// Define a type for the slice state
interface PrecipState {
  value: boolean
}

// Define the initial state using that type
const initialState: PrecipState = {
  value: savedPrecip,
}

export const PrecipSlice = createSlice({
  name: 'PrecipMood',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
   mm: (state) => {
      state.value =true
    },
    inch: (state) => {
      state.value =false
    },
   
  },
})

export const { mm,inch } = PrecipSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectPrecip = (state: RootState) => state.PrecipMood.value

export default PrecipSlice.reducer