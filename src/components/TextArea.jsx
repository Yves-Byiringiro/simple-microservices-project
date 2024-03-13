import React from 'react';


const TextArea = (props) => {
    return (
        <div className="form-group mt-3">
            <label>{props.label}</label>
            <textarea
                value={props.value}
                onChange={props.onChange}
                className="form-control"
                rows={props.rows}
                required
                maxLength={props.maxLength}
            ></textarea>
            <p className="mt-1 fst-italic text-danger" style={{fontSize:"12px"}}>Remaining characters {props.charsCount}</p>
        </div>
    )
}

export default TextArea;