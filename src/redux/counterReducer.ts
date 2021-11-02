import {ActionType} from "./store";


export const initialState = {
    count: 0,
    maxValue: 5,
    isDisabledInc: false,
    isDisabledRes: false,
    message: '',
    updatedStartValue: 0,
    updatedMaxValue: 5,
    isDisabledSet: true
}

type InitialState = typeof initialState

export const counterReducer = (state: InitialState = initialState, action: ActionType): InitialState => {
    switch (action.type) {

        case "CLICK_BTN_INC" :
            return {
                ...state,
                count: state.count + 1
            }
        case "CLICK_BTN_RESET" :
            return {
                ...state,
                count: state.updatedStartValue
            }

        case "UPDATE_START_VALUE" :
            return {
                ...state,
                updatedStartValue: action.value,
                isDisabledSet: action.value < 0 || state.updatedMaxValue <= action.value ? true : false,
                isDisabledInc: true,
                isDisabledRes: true,
                message: action.value < 0 || state.updatedMaxValue <= action.value ? 'Incorrect value!' : 'enter values and press "set"'
            }

        case "UPDATE_MAX_VALUE":
            return {
                ...state,
                updatedMaxValue: action.value,
                isDisabledSet: action.value < 0 || state.updatedStartValue >= action.value ? true : false,
                isDisabledInc: true,
                isDisabledRes: true,
                message: action.value < 0 || state.updatedStartValue >= action.value ? 'Incorrect value!' : 'enter values and press "set"'
            }

        case "CLICK_BTN_SET":
            return {
                ...state,
                count: state.updatedStartValue,
                maxValue: state.updatedMaxValue,
                isDisabledInc: false,
                isDisabledRes: false,
                message: '',
                isDisabledSet: true
            }

        default:
            return state
    }
}

export const clickBtnIncAC = () => {
    return {
        type: 'CLICK_BTN_INC'
    } as const
}

export const clickBtnResetAC = () => {
    return {
        type: 'CLICK_BTN_RESET'
    } as const
}

export const updateStartValueAC = (value: number) => {

    return {
        type: 'UPDATE_START_VALUE',
        value,
    } as const
}

export const updateMaxValueAC = (value: number) => {
    return {
        type: 'UPDATE_MAX_VALUE',
        value,
    } as const
}

export const clickBtnSetAC = () => {
    return {
        type: 'CLICK_BTN_SET',
    } as const
}