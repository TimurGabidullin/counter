import React, {useState} from 'react';
import './App.css';
import Counter from "./Counter/Counter";
import Setbar from "./Setbar/Setbar";

export type StateType = {
    count: number
    maxValue: number
    isDisabledInc:boolean
    isDisabledRes:boolean
    message:string

}

export type SetValueType = {
    updatedStartValue:number
    updatedMaxValue: number
    isDisabledSet:boolean
}



function App() {

    const [state, setState] = useState<StateType>({
        count: 0,
        maxValue: 5,
        isDisabledInc:false,
        isDisabledRes:false,
        message: ''
    })

    const [updatedValue, setUpdatedValue] = useState<SetValueType>({
        updatedStartValue: 0,
        updatedMaxValue: 5,
        isDisabledSet: true
    })

    const clickBtnInc = () => {
        setState({...state, count: state.count + 1})
    }


    const clickBtnReset = () => {
        setState({...state, count: updatedValue.updatedStartValue})
    }

    const clickBtnSet = () => {
        setState({
            ...state,
            count: updatedValue.updatedStartValue,
            maxValue: updatedValue.updatedMaxValue,
            isDisabledInc: false,
            isDisabledRes: false,
            message:''
        })
        setUpdatedValue({...updatedValue, isDisabledSet: true})
    }


    const updateStartValue = (value: number) => {
        setUpdatedValue({
            ...updatedValue,
            updatedStartValue: value,
            isDisabledSet: value < 0 || updatedValue.updatedMaxValue <= value ? true : false
        })
        setState({
            ...state,
            isDisabledInc: true,
            isDisabledRes: true,
            message: value < 0 || updatedValue.updatedMaxValue <= value ? 'Incorrect value!' : 'enter values and press "set"'

        })


    }


    const updateMaxValue = (value: number) => {
        setUpdatedValue({
            ...updatedValue,
            updatedMaxValue: value,
            isDisabledSet: value < 0 || updatedValue.updatedStartValue >= value ? true : false
        })
        setState({
            ...state,
            isDisabledInc: true,
            isDisabledRes: true,
            message: value < 0 || updatedValue.updatedStartValue >= value ? 'Incorrect value!' : 'enter values and press "set"'
        })
    }


    return (
        <div className="App">
            <Setbar updatedValue={updatedValue}
                    clickBtnSet={clickBtnSet}
                    updateMaxValue={updateMaxValue}
                    updateStartValue={updateStartValue}/>


            <Counter state={state}
                     clickBtnInc={clickBtnInc}
                     clickBtnReset={clickBtnReset}
            />

        </div>
    );
}

export default App;
