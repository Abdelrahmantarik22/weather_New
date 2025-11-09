import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

// Define a type for the slice state
interface City {
  value: string
}

// Define the initial state using that type
const initialState: City = {
  value: 'cairo',
}

export const citySlice = createSlice({
  name: 'city',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
  setCity: (state, action: PayloadAction <string>) => {
      state.value = action.payload
    },
   
  },
})



export const { setCity } = citySlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCity = (state: RootState) => state.city.value

export default citySlice.reducer




