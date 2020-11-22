import React from 'react'
import './App.css';

import {Switch, Route, Link} from 'react-router-dom'
import {connect} from "react-redux"

import HomePage from "./pages/homepage/homepage.component"
import ShopPage from "./pages/shop/shop.component"
import SignInAndSignOut from "./pages/sign-in-and-sign-up/sing-in-and-sign-up.component"

import Header from "./components/header/header.component"

import {auth, createUserProfileDocument} from "./firebase/firebase.utils"

import {setCurrentUser} from "./redux/user/user.actions"

class App extends React.Component {

  constructor(props){
    super(props);

    this.unsubscribeFromAuth = null;
    // this.state = {
    //   currentUser: null
    // }
  }

  componentDidMount(){

    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      // this.setState({currentUser: user});

      // console.log('On Auth State Changed with userAuth ', userAuth);

      if(userAuth){

        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot( snapShot => {

          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

        })
      }
      
      
      setCurrentUser({currentUser: userAuth})
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
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignOut} />
        </Switch>
        
      </div>
    );
  }
  
}

const mapDispatchToProps = (dispatch) => {

  return {
    setCurrentUser: (user) => dispatch(setCurrentUser(user))
  }

}

export default connect(null, mapDispatchToProps)(App);
