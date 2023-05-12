import React from 'react';

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
            <p className="mt-1 fst-italic text-danger" style={{fontSize:"12px"}}>Remaining characters {props.charsCount}</p>
        </div>
    )
}

export default SimpleInput;
