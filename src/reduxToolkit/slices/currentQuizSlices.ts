import {createAsyncThunk, createSlice,} from "@reduxjs/toolkit";
import axios from "axios";


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
interface AnswersCorrect{
    answer_a_correct: boolean
    answer_b_correct: boolean
    answer_c_correct: boolean
    answer_d_correct: boolean
    answer_e_correct: boolean
    answer_f_correct: boolean
}
interface Tags{
    name:string
}

interface Quiz {
    answers:Answers
    category:string
    correct_answer:string
    correct_answers:AnswersCorrect
    description?:string
    defficulty:string
    explanation?:string
    id:number
    question:string
    tags:Array<Tags>
    tip?:string
}


const initialState: InitialState = {
    currentQuiz: []
}

export const getQuizQuestionsCategory = createAsyncThunk("currentQuiz/getQuizQuestionsCategory", async (action:string, {
    rejectWithValue,
    dispatch
}) => {
    dispatch(removeCurrentQuiz())
    axios.get<Quiz[]>(`https://quizapi.io/api/v1/questions?apiKey=Vsd1LmDu2RxKVq6njL4cJwBzdG3KD5Nkf7mARdPH&category=${action}`)
        .then((response) => {
            dispatch(setCurrentQuiz(response.data))
        });
})


export const getQuizQuestionsTags = createAsyncThunk("currentQuiz/getQuizQuestionsTags", async (action:string, {
    rejectWithValue,
    dispatch
}) => {
    dispatch(removeCurrentQuiz())
    axios.get<Quiz[]>(`https://quizapi.io/api/v1/questions?apiKey=Vsd1LmDu2RxKVq6njL4cJwBzdG3KD5Nkf7mARdPH&tags=${action}`)
        .then((response) => {
            dispatch(setCurrentQuiz(response.data))

        });
})









const questionnairesSlice = createSlice({
    name: 'currentQuiz',
    initialState,
    reducers: {
        setCurrentQuiz(state,action) {
            state.currentQuiz = action.payload
        },
        removeCurrentQuiz(state){
            state.currentQuiz = []
        }
    },

})
export const {setCurrentQuiz,removeCurrentQuiz} = questionnairesSlice.actions

export default questionnairesSlice.reducer