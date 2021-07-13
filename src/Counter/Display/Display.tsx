import React from 'react';
import s from './Display.module.css'

export type DisplayPropsType = {
    count: number
    maxValue:number
}


const Display: React.FC<DisplayPropsType> = ({count,maxValue}) => {
    let color = count === maxValue ? s.red:s.display
    return (
        <div className={color}>{count}</div>
    );
};

export default Display;