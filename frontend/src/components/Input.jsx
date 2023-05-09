import React from 'react';
import './Style.css';

const SimpleInput = (props) => {
    return (
        <div className="form-group">
            <label>{props.label}</label>
            <input
                value={props.value}
                onChange={ props.onChange}
                className="form-control"
                required
                maxLength={props.maxLength}
            />
            <p className="rem-chars">Remaining characters {props.charsCount}</p>
        </div>
    )
}

export default SimpleInput;