import React from 'react'

type ButtonPropsType = {
    title: string
    isDisabled:boolean
    clickBtnHandler:()=>void
}

const Button: React.FC<ButtonPropsType> = ({title,isDisabled,clickBtnHandler}) => {
    return (
        <button onClick={clickBtnHandler} disabled={isDisabled}>{title}</button>
    )
}


export default Button