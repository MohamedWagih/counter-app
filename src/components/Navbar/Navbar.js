import React, { Component } from 'react';
import classes from './Navbar.css'

class Navbar extends Component {
   
    render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top ">
            <div className='container'>
            {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button> */}
            {/* <div className="collapse navbar-collapse  " id="navbarNavAltMarkup"> */}
                <ul className={" " + classes.center}>
                    <h5 className="nav-item nav-link ">COUNTER: <span>{this.props.max}</span></h5>
                </ul>
            {/* </div> */}
            </div>
        </nav>
    );
    }
}

export default Navbar;





