import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import MenuItem from "../menu-item/menu-item.component"
// import SECTIONS_DATA from "./sections.data"
import {selectDirectoryData} from "../../redux/directory/directory.selectors"
// import "./directory.styles.scss"

import {DirectoryMenuContainer} from "./directory.styles"

class Directory extends React.Component{
    
    constructor(props){
        super(props);

    }

    render(){
        // console.log('this directory component', this.props.menuItems)
        return(
            <DirectoryMenuContainer>
                {
                    this.props.menuItems.map(({id, ...someOtherParams})=>(
                        <MenuItem key={id} {...someOtherParams} />
                    ))
                }
            </DirectoryMenuContainer>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         menuItems: state.directory.directory
//     }
// }

const mapStateToProps = createStructuredSelector({
    menuItems: selectDirectoryData
})

export default connect(mapStateToProps, null)(Directory);