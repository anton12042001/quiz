import {createAsyncThunk, createSlice, PayloadAction,} from "@reduxjs/toolkit";

type questionnairesType = Array<{ id: string }>


interface InitialState {
    questionnaires: questionnairesType
}


const initialState: InitialState = {
    questionnaires: []
}


export const saveQuestionnaire = createAsyncThunk("questions/saveQuestionnaire", async (action, {rejectWithValue, dispatch}) => {

})





const questionnairesSlice = createSlice({
    name: 'questions',
    initialState,
    reducers: {
        setQuestionnaires(state, action: PayloadAction<questionnairesType>) {
            state.questionnaires = action.payload
        }
    },

})
export const {setQuestionnaires} = questionnairesSlice.actions

export default questionnairesSlice.reducer