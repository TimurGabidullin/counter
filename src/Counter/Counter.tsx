import React from 'react';
import Display from "./Display/Display";
import Keyboard from "./Keyboard/Keyboard";
import s from './Counter.module.css'

import {AppStateType} from "../redux/store";

export type CounterPropsType = {
    state: AppStateType
    clickBtnInc: () => void
    clickBtnReset: () => void
}

const Counter: React.FC<CounterPropsType> = (props) => {
    const {count,maxValue,isDisabledRes,isDisabledInc,message} = props.state.counter
    const {clickBtnInc, clickBtnReset} = props

    return (
        <div className={s.wrapper}>
            <Display count={count}
                     maxValue={maxValue}
                     message={message}/>

            <Keyboard count={count}
                      maxValue={maxValue}
                      clickBtnInc={clickBtnInc}
                      clickBtnReset={clickBtnReset}
                      isDisabledRes={isDisabledRes}
                      isDisabledInc={isDisabledInc}/>
        </div>
    );
};


export default Counter;