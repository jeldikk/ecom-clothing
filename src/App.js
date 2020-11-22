import React from 'react'
import './App.css';

import {Switch, Route, Link} from 'react-router-dom'

import HomePage from "./pages/homepage/homepage.component"
import ShopPage from "./pages/shop/shop.component"
import SignInAndSignOut from "./pages/sign-in-and-sign-up/sing-in-and-sign-up.component"

import Header from "./components/header/header.component"

import {auth, createUserProfileDocument} from "./firebase/firebase.utils"

class App extends React.Component {

  constructor(props){
    super(props);

    this.unsubscribeFromAuth = null;
    this.state = {
      currentUser: null
    }
  }

  componentDidMount(){

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      // this.setState({currentUser: user});

      // console.log(user);
      // console.log('On Auth State Change', user.displayName);
      // console.log(user.displayName)
      // console.log(user)
      console.log('On Auth State Changed');
      await createUserProfileDocument(user);
      // console.log('on auth state change ',user);
      this.setState({currentUser: user});
    })

    // console.log(this.unsubscribeFromAuth)


  }

  componentWillUnmount(){
    console.log("Will unmount called")
    if(!this.unsubscribeFromAuth){
      return
    }
    this.unsubscribeFromAuth();
  }

  render(){

    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignOut} />
        </Switch>
        
      </div>
    );
  }
  
}

export default App;
