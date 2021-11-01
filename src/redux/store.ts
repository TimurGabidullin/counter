import {combineReducers, createStore} from "redux";
import {
    clickBtnIncAC,
    clickBtnResetAC,
    clickBtnSetAC,
    counterReducer,
    updateMaxValueAC,
    updateStartValueAC
} from "./counterReducer";


const rootReducer = combineReducers({
    counter: counterReducer,
})

export type ActionType = ReturnType<typeof clickBtnIncAC> |
    ReturnType<typeof clickBtnResetAC> |
    ReturnType<typeof updateStartValueAC> |
    ReturnType<typeof updateMaxValueAC> |
    ReturnType<typeof clickBtnSetAC>

export type AppStateType = ReturnType<typeof rootReducer>
export type AppStoreType = typeof store


export const store = createStore(rootReducer)