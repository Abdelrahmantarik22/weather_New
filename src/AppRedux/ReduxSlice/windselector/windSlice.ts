import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../../store'



  const savedWind = JSON.parse(localStorage.getItem('wind') || 'true');


// Define a type for the slice state
interface WindState {
  value: boolean
}

// Define the initial state using that type
const initialState: WindState = {
  value: savedWind,
}

export const WindSlice = createSlice({
  name: 'WindMood',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
   km: (state) => {
      state.value =true
    },
    mp: (state) => {
      state.value =false
    },
   
  },
})

export const { km, mp } = WindSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectWind = (state: RootState) => state.WindMood.value

export default WindSlice.reducer