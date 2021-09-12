import React, {ChangeEvent} from 'react';
import s from './InputMenu.module.css'

export type DisplayPropsType = {
    updatedStartValue: number
    updatedMaxValue: number
    updateMaxValue: (value: number) => void
    updateStartValue: (value: number) => void
}


const InputMenu: React.FC<DisplayPropsType> = (
    {
        updatedStartValue,
        updatedMaxValue,
        updateMaxValue,
        updateStartValue,

    }) => {

    const changeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        updateMaxValue(+e.currentTarget.value)
    }

    const changeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        updateStartValue(+e.currentTarget.value)
    }

    return (
        <div className={s.display}>
            <div>max value
                <input type='number'
                       value={updatedMaxValue}
                       onChange={changeMaxValue}
                       className={updatedStartValue >= updatedMaxValue ? s.red : s.blue}/>
            </div>
            <div>start value
                <input type='number'
                       value={updatedStartValue}
                       onChange={changeStartValue}
                       className={updatedStartValue < 0 || updatedStartValue >= updatedMaxValue ? s.red : s.blue}/>
            </div>
        </div>
    );
};

export default InputMenu;