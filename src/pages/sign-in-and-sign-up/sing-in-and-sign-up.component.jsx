import React from 'react'


import SignIn from "../../components/sign-in/sign-in.component"
import SignUp from "../../components/sign-up/sign-up.component"


import "./sign-in-and-sign-up.styles.scss"

const SignInAndSignUp = ()=>(
    <div className="sign-in-sign-up">
        {/* Sign In and Sign Up page */}
        <SignIn />
        <SignUp />
    </div>
)

export default SignInAndSignUp