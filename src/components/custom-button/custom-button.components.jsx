import React from 'react'

import "./custom-button.styles.scss"

import {CustomButtonContainer} from "./custom-button.styles"

// const CustomButton = ({ children, googleButton, inverted, ...otherProps }) => (
//     <button className={`${inverted ? 'inverted' : ''}  ${googleButton ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
//         {children}
//     </button>
//     <CustomButtonContainer
// )
const CustomButton = (props) => {
    return <CustomButtonContainer {...props}>{props.children}</CustomButtonContainer>
}

export default CustomButton;