import React from 'react'
// import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import {auth} from "../../firebase/firebase.utils"
import { ReactComponent as Logo} from "../../assets/crown.svg"
import CartIcon from "../cart-icon/cart-icon.component"
import CartDropdown from "../cart-dropdown/cart-dropdown.component"
// import "./header.styles.scss"

import {HeaderContainer, LogoContainer, OptionsContainer, OptionDiv, OptionLink} from "./header.styles"

const Header = ({currentUser, hidden})=>{

    // console.log("header curr?entUser ", currentUser);


    return(
    <HeaderContainer>
        <LogoContainer to="/">
            <Logo className="logo" />
        </LogoContainer>

        <OptionsContainer>
            <OptionLink to="/shop">SHOP</OptionLink>
            <OptionLink to="/contact">CONTACT</OptionLink>
            {
                currentUser ?
                <OptionLink as='div' onClick={() => {auth.signOut()}}>({currentUser.displayName})SIGN OUT</OptionLink>
                :
                <OptionLink to="/signin">SIGN IN</OptionLink>
            }
            <CartIcon />
        </OptionsContainer>
        {
            hidden ? null : <CartDropdown />
        }
        
    </HeaderContainer>
    )
}

const mapStateToProps = ({user:{currentUser}, cart:{hidden}})=>{
    // console.log("header mstp :", currentUser, " ", hidden );
    return {
        currentUser,
        hidden
    }
}

export default connect(mapStateToProps)(Header);