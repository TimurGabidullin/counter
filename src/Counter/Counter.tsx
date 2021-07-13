import React from 'react';
import Display from "./Display/Display";
import Keyboard from "./Keyboard/Keyboard";
import s from './Counter.module.css'
import {StateType} from "../App";

export type CounterPropsType = {
    state: StateType
    clickBtnInc: () => void
    clickBtnReset: () => void
}

const Counter: React.FC<CounterPropsType> = (props) => {
    const {count,maxValue} = props.state
    const {clickBtnInc, clickBtnReset} = props

    return (
        <div className={s.wrapper}>
            <Display count={count}
                     maxValue={maxValue}/>
            <Keyboard count={count}
                      maxValue={maxValue}
                      clickBtnInc={clickBtnInc}
                      clickBtnReset={clickBtnReset}
            />
        </div>
    );
};


export default Counter;