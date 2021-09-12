import React from 'react';
import s from './Keyboard.module.css'
import Button from "../../Button";


export type KeyboardPropsType = {
    count: number
    maxValue: number
    clickBtnInc: () => void
    clickBtnReset: () => void
    isDisabledRes: boolean
    isDisabledInc: boolean
}

const Keyboard: React.FC<KeyboardPropsType> = (
    {
        clickBtnInc,
        clickBtnReset,
        count,
        maxValue,
        isDisabledRes,
        isDisabledInc
    }) => {

    const clickBtnIncHandler = () => {
        clickBtnInc()
    }

    const clickBtnResetHandler = () => {
        clickBtnReset()
    }


    return (
        <div className={s.keyboard}>
            <Button title={'inc'} isDisabled={isDisabledInc||count===maxValue} clickBtnHandler={clickBtnIncHandler}/>
            <Button title={'reset'} isDisabled={isDisabledRes} clickBtnHandler={clickBtnResetHandler}/>
        </div>
    );
};

export default Keyboard;