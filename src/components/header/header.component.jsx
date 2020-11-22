import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import {auth} from "../../firebase/firebase.utils"
import { ReactComponent as Logo} from "../../assets/crown.svg"
import "./header.styles.scss"

const Header = ({currentUser})=>{

    console.log("header currentUser ", currentUser);


    return(
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo" />
        </Link>

        <div className='options'>
            <Link to="/shop" className="option">SHOP</Link>
            <Link to="/contact" className="option">CONTACT</Link>
            {/* <Link to="/signin" className="option">SIGNIN</Link> */}
            {
                currentUser ?
                <div className="option" onClick={() => {auth.signOut()}}>({currentUser.displayName})SIGN OUT</div>
                :
                <Link className="option" to="/signin">SIGN IN</Link>
            }
        </div>
    </div>
    )
}

const mapStateToProps = (state)=>{
    console.log("header mstp :", state);
    return {
        currentUser: state.user.currentUser
    }
}

export default connect(mapStateToProps)(Header);