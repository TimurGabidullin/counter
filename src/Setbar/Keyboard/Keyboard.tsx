import React from 'react';
import s from './Keyboard.module.css'
import Button from "../../Button";


export type KeyboardPropsType = {
    clickBtnSet: () => void
    isDisabledSet: boolean
}

const Keyboard: React.FC<KeyboardPropsType> = ({clickBtnSet,isDisabledSet}) => {

    const clickBtnSetHandler = () => {
        clickBtnSet()
    }

    return (
        <div className={s.keyboard}>
            <Button title={'set'} isDisabled={isDisabledSet} clickBtnHandler={clickBtnSetHandler}/>
        </div>
    );
};

export default Keyboard;