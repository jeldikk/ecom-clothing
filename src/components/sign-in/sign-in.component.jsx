import React from "react";

import "./sign-in.styles.scss";

import FormInput from "../form-input/form-input.component"
import CustomButton from "../custom-button/custom-button.components"

import {signInWithGoogle} from "../../firebase/firebase.utils"

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handleOnChange = (event)=>{

    const {name, value} = event.target;
    // https://medium.com/@bretdoucette/understanding-this-setstate-name-value-a5ef7b4ea2b4
    // console.log({name: value});
    this.setState({[name]: value});
  }

  render() {
    return (
      <div className="sign-in">
        <h1 className="title">I already have an account</h1>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>

          <FormInput handleChange={this.handleOnChange} label='EMAIL' name='email' type="email" value={this.state.email} />
          
          <FormInput handleChange={this.handleOnChange} label="PASSWORD" name="password" type="password" value={this.state.password} required />

          <div className="buttons">
            <CustomButton type="submit">
              Sign In
            </CustomButton>
            <CustomButton type="button" onClick={signInWithGoogle} googleButton>
              SignIn with Google
            </CustomButton>
          </div>
          
        </form>
      </div>
    );
  }
}

export default SignIn;
