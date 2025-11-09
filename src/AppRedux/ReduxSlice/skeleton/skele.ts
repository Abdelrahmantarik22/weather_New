import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../../store'



// Define a type for the slice state
interface SkeleState {
  value: boolean
}

// Define the initial state using that type
const initialState: SkeleState = {
  value: false,
}

export const SkeleSlice = createSlice({
  name: 'SkeleMood',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
   sy: (state) => {
      state.value =true
    },
    sn: (state) => {
      state.value =false
    },
   
  },
})

export const { sy, sn } = SkeleSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectSkele = (state: RootState) => state.SkeleMood.value

export default SkeleSlice.reducer