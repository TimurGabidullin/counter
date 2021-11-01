import React, {useEffect, useState} from 'react';
import './App.css';
import Counter from "./Counter/Counter";
import Setbar from "./Setbar/Setbar";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./redux/store";
import {
    clickBtnIncAC,
    clickBtnResetAC,
    clickBtnSetAC,
    updateMaxValueAC,
    updateStartValueAC
} from "./redux/counterReducer";

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

    const state = useSelector<AppStateType, AppStateType>((state) => state)
    const dispatch = useDispatch()


    //
    // useEffect(() => {
    //     let count = localStorage.getItem('count')
    //     let maxValue = localStorage.getItem('maxValue')
    //     if (count && maxValue) {
    //         let newCount = JSON.parse(count)
    //         let newMaxValue=JSON.parse(maxValue)
    //         setState({...state, count: newCount,maxValue:newMaxValue})
    //         setUpdatedValue({...updatedValue, updatedStartValue: newCount,updatedMaxValue:newMaxValue})
    //     }
    //
    // }, [])


    //
    // const [state, setState] = useState<StateType>({
    //     count: 0,
    //     maxValue: 5,
    //     isDisabledInc:false,
    //     isDisabledRes:false,
    //     message: ''
    // })
    //
    const [updatedValue, setUpdatedValue] = useState<SetValueType>({
        updatedStartValue: 0,
        updatedMaxValue: 5,
        isDisabledSet: true
    })

    const clickBtnInc = () => {
        dispatch(clickBtnIncAC())

        // setState({...state, count: state.count + 1})
    }


    const clickBtnReset = () => {
        dispatch(clickBtnResetAC())
        // setState({...state, count: updatedValue.updatedStartValue})
    }


    const clickBtnSet = () => {
        dispatch(clickBtnSetAC())
        // setState({
        //     ...state,
        //     count: updatedValue.updatedStartValue,
        //     maxValue: updatedValue.updatedMaxValue,
        //     isDisabledInc: false,
        //     isDisabledRes: false,
        //     message: ''
        // })
        // setUpdatedValue({...updatedValue, isDisabledSet: true})
        // localStorage.setItem('count', JSON.stringify(updatedValue.updatedStartValue))
        // localStorage.setItem('maxValue', JSON.stringify(updatedValue.updatedMaxValue))
    }


    const updateStartValue = (value: number) => {
        dispatch(updateStartValueAC(value))


        // setUpdatedValue({
        //     ...updatedValue,
        //     updatedStartValue: value,
        //     isDisabledSet: value < 0 || updatedValue.updatedMaxValue <= value ? true : false
        // })
        // setState({
        //     ...state,
        //     isDisabledInc: true,
        //     isDisabledRes: true,
        //     message: value < 0 || updatedValue.updatedMaxValue <= value ? 'Incorrect value!' : 'enter values and press "set"'
        //
        // })


    }


    const updateMaxValue = (value: number) => {
        dispatch(updateMaxValueAC(value))
        // setUpdatedValue({
        //     ...updatedValue,
        //     updatedMaxValue: value,
        //     isDisabledSet: value < 0 || updatedValue.updatedStartValue >= value ? true : false
        // })
        // setState({
        //     ...state,
        //     isDisabledInc: true,
        //     isDisabledRes: true,
        //     message: value < 0 || updatedValue.updatedStartValue >= value ? 'Incorrect value!' : 'enter values and press "set"'
        // })
    }


    return (
        <div className="App">
            <Setbar updatedValue={state}
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
