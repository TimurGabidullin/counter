import React from 'react';
import s from './Display.module.css'

export type DisplayPropsType = {
    count: number
    maxValue: number
    message: string
}


const Display: React.FC<DisplayPropsType> = ({count, maxValue, message}) => {
    let color = message ? s.message : count === maxValue ? s.red : s.display

    return (
        <div className={message === 'Incorrect value!' ? s.text : color}>{message || count}</div>
    );
}

export default Display;