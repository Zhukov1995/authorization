import React from "react";
import './button.scss';
import IButton from "../../../interfaces/IButton";

const Button = ({ width, radius, value, type, ...props }: IButton): JSX.Element => {
    const style = {
        width: width,
        borderRadius: radius
    }
    return (
        <button
            type={type}
            style={style}
            className="button"
            {...props}
        >{value}</button>
    )
}

export default Button;