import {configureStore} from "@reduxjs/toolkit";
import currentQuizReducer from './slices/currentQuizSlices'

export const store = configureStore({
    reducer: {
        currentQuiz:currentQuizReducer
    },

})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch