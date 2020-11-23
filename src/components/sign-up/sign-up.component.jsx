import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.components";

import "./sign-up.styles.scss";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

// import React, { Component } from 'react'

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
      email_error: '',
      password_error: '',
    };
  }

  handleOnChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("passwords dont match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      console.log("got user ", user.displayName, " ", user.email);
      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
        email_error: '',
        password_error: ''
      });


    } 
    catch (error) {
   
      let error_code = error.code;
      let message = error.message;

      if (error_code === "auth/email-already-in-use") {
        this.setState({
          email_error: "email already in use",
          password_error: '',
        });
      }

      if (error_code === "auth/invalid-email") {
        this.setState({ email_error: message, password_error: '' });
      }

      if (error_code === "auth/weak-password") {

        this.setState({ email_error: '', password_error:message });
      }
    }
  };

  render() {

    const {email_error, password_error} = this.state;

    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>

        <div className="errors">
            {
                email_error.length === 0 ? null : <p>{email_error}</p>
            }
            {
                password_error.length === 0 ? null : <p>{password_error}</p>
            }
        </div>

        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={this.state.displayName}
            handleChange={this.handleOnChange}
            label="USERNAME"
            required
          />

          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            handleChange={this.handleOnChange}
            label="EMAIL"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            handleChange={this.handleOnChange}
            label="PASSWORD"
            required
          />

          <FormInput
            type="password"
            name="confirmPassword"
            value={this.state.confirmPassword}
            handleChange={this.handleOnChange}
            label="CONFIRM PASSWORD"
            required
          />

          <CustomButton type="submit">Sign Up</CustomButton>
        </form>
      </div>
    );
  }
}
