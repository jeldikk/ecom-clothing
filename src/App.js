import React from 'react'
import './App.css';

import {Switch, Route, Link, Redirect} from 'react-router-dom'
import {connect} from "react-redux"
import {createStructuredSelector} from "reselect"

import HomePage from "./pages/homepage/homepage.component"
import ShopPage from "./pages/shop/shop.component"
import SignInAndSignOut from "./pages/sign-in-and-sign-up/sing-in-and-sign-up.component"
import CollectionPage from "./pages/collection-page/collection-page.component"
import CheckoutPage from "./pages/checkout-page/checkout-page.component"

import Header from "./components/header/header.component"

import {auth, createUserProfileDocument, addCollectionAndDocuments} from "./firebase/firebase.utils"

import {setCurrentUser} from "./redux/user/user.actions"
import {selectCurrentUser} from "./redux/user/user.selectors"
import {selectCollections} from "./redux/shop/shop.selectors"

export class App extends React.Component{

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

        }, err => console.error("Error when There is no connection"), () => console.log('onSnapshot callback is executed'))
      }
      
      
      setCurrentUser({currentUser: userAuth});
      // addCollectionAndDocuments('collections', collections);
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

    // let {curUser} = this.props.currentUser;
    // console.log('curUser in App render',curUser)
    // console.log('this.props in render',this.props)
    

    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          {/* <Route path="/shop/:collectionName" component={CollectionPage} /> */}

          <Route exact path="/checkout" component={CheckoutPage} />
          {/* <Route path="/signin" component={SignInAndSignOut} /> */}
          <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to="/" />) : (<SignInAndSignOut />) } />
          
        </Switch>
        
      </div>
    );
  }
  
}


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})


const mapDispatchToProps = (dispatch) => {

  return {
    setCurrentUser: (user) => dispatch(setCurrentUser(user))
  }

}

// export App;

export default connect(mapStateToProps, mapDispatchToProps)(App);
