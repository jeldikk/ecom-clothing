import React from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import "./shop.styles.scss";

// import SHOP_DATA from "../../redux/shop/shop.data"
import { selectCollections, selectIsCollectionFetching } from "../../redux/shop/shop.selectors";
// import { setShopDataCollection } from "../../redux/shop/shop.actions";
import {fetchCollectionStartAsync} from "../../redux/shop/shop.actions"
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import CollectionPage from "../collection-page/collection-page.component";

import WithSpinner from "../../components/with-spinner/with-spinner.component";
import {
  firestore,
  convertCollectionSnapshotToMap,
} from "../../firebase/firebase.utils";

const CollectionPreviewWithSpinner = WithSpinner(CollectionPreview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };

    
  }

  // unsubscribeFromSnapshot = null;

  componentDidMount() {
    // let collectionRef = firestore.collection("collections");
    console.log("This is in shop component did mount method");

    // the below snippet shows on using redux-thunk to do asynchronous execution
    this.props.fetchCollectionStartAsync();

    // the below shows on how to use firebase using observable/observer pattern. 
    // onSnapShot is a subscription function on how to work with values pushed by firebase
    // this.unsubscribeFromSnapshot = collectionRef.onSnapshot({
    //   next: (snapshot)=>{
    //     const collectionMap = convertCollectionSnapshotToMap(snapshot);
    //     console.log("This snapshot is from observables/observers pattern");
    //     this.props.setShopData(collectionMap);
    //     this.setState({loading: false});
    //   },
    //   error: (err) => {
    //     console.log("Error occured while fetching the data ", err)
    //   },
    //   complete: ()=>{
    //     console.log("Completed fetching data from firebase")
    //   }
    // })



    //***
    //this is how we leverage promise pattern to get data from firebase
    // but the problem with using such pattern is, we can get updated data when it changes in firebase 

    // collectionRef.get()
    //     .then((snapshot) => {
    //       const collectionMap = convertCollectionSnapshotToMap(snapshot);
    //       console.log("This snapshot is from promises pattern");
    //       this.props.setShopData(collectionMap);
    //       this.setState({loading: false});
    //     })
    //     .catch((error)=>{
    //       console.log("Error occured while fetching data")
    //     })
    //     .finally(()=>{
    //       console.log("At the end of getting data using promise method")
    //     })
    // ***


    

    //We can also use native fetch function to get data from firebase.
    // For this we will use firebase REST API endpoint.
    // One main drawback of this method is we need to destructor as large hierarchial json data. which is very cumbersome and extremely nested.
    // https://firestore.googleapis.com/v1/projects/YOUR_PROJECT_ID/databases/(default)/documents/'

    // fetch('https://firestore.googleapis.com/v1/projects/crwn-db-41940/databases/(default)/documents/collections')
    // .then((response)=> response.json())
    // .then((collections) => console.log(collections));

    

  }

  render() {
    let keylist = Object.keys(this.props.collections);

    // console.log(this.props); // this.props.match.path is /shop
    const {isCollectionFetching} = this.props;

    return (
      <div className="shop-page">
        <h1>Collections</h1>
        <Switch>
          <Route
            exact
            path={`${this.props.match.path}`}
            render={() =>
              keylist.map((key) => (
                //   <CollectionPreview key={key} {...this.props.collections[key]} />
                <CollectionPreviewWithSpinner key={key}
                  isLoading={isCollectionFetching}
                  {...this.props.collections[key]}
                />
              ))
            }
          />

          <Route
            exact
            path={`${this.props.match.path}/:collectionName`}
            render={(props) => (
              <CollectionPageWithSpinner
                isLoading={isCollectionFetching}
                {...props}
              />
            )}
          />
        </Switch>
        
        
        
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//     return {
//         collection: select
//     }
// }

// const mapStateToProps = createStructuredSelector({
//   collections: selectCollections,
// });

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
  isCollectionFetching: selectIsCollectionFetching
})

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
