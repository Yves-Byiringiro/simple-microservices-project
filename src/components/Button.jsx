import React from 'react';

const Button = (props) => {
    return (
        <button className="btn btn-outline-success my-3" type="submit">{props.name}</button>
    )
}

export default Button;