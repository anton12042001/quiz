import {useDispatch,useSelector,TypedUseSelectorHook} from "react-redux"
import type {RootState,AppDispatch} from './reduxToolkit'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector