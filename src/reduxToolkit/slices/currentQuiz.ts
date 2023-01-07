import {createAsyncThunk, createSlice, PayloadAction,} from "@reduxjs/toolkit";
import axios from "axios";
import {useAppDispatch} from "../../hooc";

type currentQuizType = Array<{ id: string }>


interface InitialState {
    currentQuiz: currentQuizType
}

interface Answers{
    answer_a: null | string
    answer_b: null | string
    answer_c: null | string
    answer_d: null | string
    answer_e: null | string
    answer_f: null | string
}

interface Quiz {
    answers:{
        [key: string]: Answers
    }
}


const initialState: InitialState = {
    currentQuiz: []
}

export const getCurrentQuizQuestions = createAsyncThunk("currentQuiz/getCurrentQuizQuestions", async (_, {
    rejectWithValue,
    dispatch
}) => {
    try {

        const response = await axios.get(`https://quizapi.io/api/v1/questions?apiKey=Vsd1LmDu2RxKVq6njL4cJwBzdG3KD5Nkf7mARdPH&tags=HTML`);
        dispatch(setCurrentQuiz(response.data))
    } catch (error) {
        console.error(error);
    }
})


const questionnairesSlice = createSlice({
    name: 'currentQuiz',
    initialState,
    reducers: {
        setCurrentQuiz(state, action: PayloadAction<currentQuizType>) {
            state.currentQuiz = action.payload
        }
    },

})
export const {setCurrentQuiz} = questionnairesSlice.actions

export default questionnairesSlice.reducer