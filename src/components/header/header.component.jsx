import React from 'react'
import { Link } from 'react-router-dom'

import "./header.styles.scss"
import { auth } from '../../firebase/firebase.utils'

import { ReactComponent as Logo } from "../../assests/crown.svg"

const Header = ({ currentUser }) => {
    return (
        <header>
            <Link to="/" className="logo-container"><Logo className="logo" /></Link>
            <div className="options">
                <Link className="option" to="/shop">SHOP</Link>
                <Link className="option" to="/contact">CONTACT</Link>
                {
                    currentUser ?
                        <span className="option" onClick={() => auth.signOut()}> SIGN OUT</span> :
                        <Link className="option" to="/signin">SIGN IN</Link>
                }

            </div>
        </header>
    )
}

export default Header
