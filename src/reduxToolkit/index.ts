import {configureStore} from "@reduxjs/toolkit";
import currentQuizReducer from './slices/currentQuiz'

export const store = configureStore({
    reducer: {
        currentQuiz:currentQuizReducer
    },

})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch