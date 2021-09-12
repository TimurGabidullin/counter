import React from 'react';
import InputMenu from "./InputMenu/InputMenu";
import Keyboard from "./Keyboard/Keyboard";
import s from './Setbar.module.css'
import {SetValueType} from "../App";

export type SetbarPropsType = {
    updatedValue: SetValueType
    clickBtnSet: () => void
    updateMaxValue: (value: number) => void
    updateStartValue: (value: number) => void
}

const Setbar: React.FC<SetbarPropsType> = (props) => {
    const {updatedStartValue, updatedMaxValue, isDisabledSet} = props.updatedValue
    const {clickBtnSet, updateMaxValue, updateStartValue} = props

    return (
        <div className={s.wrapper}>
            <InputMenu updatedStartValue={updatedStartValue}
                       updatedMaxValue={updatedMaxValue}
                       updateMaxValue={updateMaxValue}
                       updateStartValue={updateStartValue}/>
            <Keyboard clickBtnSet={clickBtnSet}
                      isDisabledSet={isDisabledSet}/>
        </div>
    );
};


export default Setbar;