import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import "./shop.styles.scss"

// import SHOP_DATA from "../../redux/shop/shop.data"
import {selectCollections} from "../../redux/shop/shop.selectors"

import CollectionPreview from "../../components/collection-preview/collection-preview.component"

class ShopPage extends React.Component{

    constructor(props){
        super(props);

        // this.state = {
        //     collections: SHOP_DATA
        // }
        console.log("shop component ", props)

    }

    render(){

        let keylist = Object.keys(this.props.collections)

        return (
            <div className="shop-page">
                <h1>Collections</h1>
                {
                    // this.props.collections.map(({id, title, items})=>(
                    //     <CollectionPreview key={id} title={title} items={items} />
                    // ))
                    keylist.map((key) => <CollectionPreview key={key} {...this.props.collections[key]} />)
                }
            </div>
        )
    }
}


// const mapStateToProps = (state) => {
//     return {
//         collection: select
//     }
// }

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})

export default connect(mapStateToProps, null)(ShopPage);