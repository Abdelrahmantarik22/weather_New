import { configureStore } from "@reduxjs/toolkit";
import TempReducer from './ReduxSlice/tempSelector/tempSlice'
import WindReducer from './ReduxSlice/windselector/windSlice'
import PrecipReducer from './ReduxSlice/precipselector/precipSlice'
import SkeleReducer from './ReduxSlice/skeleton/skele'
import cityReducer from './ReduxSlice/citySlice'
import ErrorReducer from './ReduxSlice/error'



export const store=configureStore({
    reducer:{
TempMood:TempReducer,
city:cityReducer,
WindMood:WindReducer,
PrecipMood:PrecipReducer,
SkeleMood:SkeleReducer,
ErrorMood:ErrorReducer
    }
})



// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch