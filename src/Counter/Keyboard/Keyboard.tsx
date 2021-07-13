import React from 'react';
import s from './Keyboard.module.css'


export type KeyboardPropsType = {
    count: number
    maxValue:number
    clickBtnInc: () => void
    clickBtnReset: () => void
}

const Keyboard: React.FC<KeyboardPropsType> = ({ clickBtnInc, clickBtnReset,count,maxValue}) => {




    const clickBtnIncHandler = () => {
        clickBtnInc()
    }

    const clickBtnResetHandler = () => {
        clickBtnReset()
    }


    return (
        <div className={s.keyboard}>
            <button onClick={clickBtnIncHandler} disabled={count===maxValue}>inc</button>
            <button onClick={clickBtnResetHandler} disabled={count===0} >reset</button>
        </div>
    );
};

export default Keyboard;