import React from 'react';
import './App.css';
import Counter from "./components/Counter/Counter";
import Setbar from "./components/Setbar/Setbar";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./redux/store";
import {
    clickBtnIncAC,
    clickBtnResetAC,
    clickBtnSetAC,
    updateMaxValueAC,
    updateStartValueAC
} from "./redux/counterReducer";

function App() {

    const state = useSelector<AppStateType, AppStateType>((state) => state)
    const dispatch = useDispatch()

    const clickBtnInc = () => {
        dispatch(clickBtnIncAC())
    }

    const clickBtnReset = () => {
        dispatch(clickBtnResetAC())
    }

    const clickBtnSet = () => {
        dispatch(clickBtnSetAC())
    }

    const updateStartValue = (value: number) => {
        dispatch(updateStartValueAC(value))
    }

    const updateMaxValue = (value: number) => {
        dispatch(updateMaxValueAC(value))
    }

    return (
        <div className="App">
            <Setbar updatedValue={state}
                    clickBtnSet={clickBtnSet}
                    updateMaxValue={updateMaxValue}
                    updateStartValue={updateStartValue}/>

            <Counter state={state}
                     clickBtnInc={clickBtnInc}
                     clickBtnReset={clickBtnReset}/>
        </div>
    );
}

export default App;
