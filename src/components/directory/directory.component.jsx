import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import MenuItem from "../menu-item/menu-item.component"
// import SECTIONS_DATA from "./sections.data"
import {selectDirectoryData} from "../../redux/directory/directory.selectors"
import "./directory.styles.scss"

class Directory extends React.Component{
    
    constructor(props){
        super(props);

        // this.state = {

        //     menuitems: SECTIONS_DATA
        // }
        // console.log(props)
    }

    render(){
        // console.log('this directory component', this.props.menuItems)
        return(
            <>
                <div className="directory-menu">
                    {
                        // this.state.menuitems.map(({title, imageUrl, id, size, linkUrl}) => (
                        //     <MenuItem key={id} title={title} imageurl={imageUrl} size={size} linkUrl={linkUrl}/>
                        // ))
                        this.props.menuItems.map(({id, ...someOtherParams})=>(
                            <MenuItem key={id} {...someOtherParams} />
                        ))
                    }
                </div>
            </>
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