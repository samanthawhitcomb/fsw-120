import React from 'react';
import {Link} from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        return(
        <div className = "nav">
            <ul id="navbar">
                <li className="navLink">
                    <Link to="/">Home</Link>
                </li>
                <li className="navLink">
                    <Link to="/about">About</Link>
                </li>
                <li className="navLink">
                    <Link to="/services">Services</Link>
                </li>
            </ul>
        </div>
    )
}
}
export default Navbar;