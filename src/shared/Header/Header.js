import React from 'react';
import { NavLink, BrowserRouter as Router, } from 'react-router-dom';

import { SignupButton } from '../Buttons/Buttons';
import './Header.css';


const Header = (props) => {
    console.log("PROPS:", props)
    return (
        <Router forceRefresh={true}>
            <div className="Header__Wrapper">
                <div className="Header__MainLinks">
                    <div className="Header__Link">Logo</div>
                    <NavLink className="Header__Link" activeClassName="Header__Link--active" to="/" exact>
                        Mission
                    </NavLink>
                    <NavLink className="Header__Link" activeClassName="Header__Link--active" to="/businesses" exact>
                        Businesses
                    </NavLink>
                    <NavLink className="Header__Link" activeClassName="Header__Link--active" to="/community" exact>
                        Community
                    </NavLink>
                    <NavLink className="Header__Link" activeClassName="Header__Link--active" to="/donate" exact>
                        How to Help
                    </NavLink>
                </div>
                <div className="Header__AuthLinks">
                    <div className="Header__LinkLogin">Login</div>
                    <SignupButton />
                </div>
            </div>
        </Router>
    )
}

export default Header;