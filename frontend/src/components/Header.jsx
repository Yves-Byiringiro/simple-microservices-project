import React from 'react';
import {Link} from 'react-router-dom';


const Header = () => {
    return(
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <Link to={"/"}><span className="navbar-brand">Home</span></Link>
                <div className="d-flex">
                    <Link to={"/add-post"}><button className="btn btn-outline-success" type="submit">Create Post</button></Link>
                </div>
            </div>
        </nav>
    )
}


export default Header;