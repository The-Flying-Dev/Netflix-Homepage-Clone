import React, { useState, useEffect } from 'react';

import './Nav.css';

//images used for src attribute
const logo = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png"
const avatar = "https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"

//stateless component
function Nav() {

    const [show, handleShow] = useState(false);

    //listening for a scroll, if scroll on Y-axis is greater than 100px, 
    //use the handleShow setter function to change the state
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        // remove the listener each time useEffect runs, to avoid having multiple listeners
        return () => {
            window.removeEventListener("scroll");
        }
    }, []);

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img 
                className="nav_logo"
                src={logo}
                alt="Netflix logo"
            />
            <img 
                className="nav_avatar"
                src={avatar}
                alt="Netflix logo"
            />
        </div>
    );
}

export default Nav;