import React from 'react'

import MenuItem from "../menu-item/menu-item.component"
import SECTIONS_DATA from "./sections.data"
import "./directory.styles.scss"

class Directory extends React.Component{
    
    constructor(props){
        super(props);

        this.state = {

            menuitems: SECTIONS_DATA
        }
    }

    render(){

        return(
            <>
                <div className="directory-menu">
                    {
                        // this.state.menuitems.map(({title, imageUrl, id, size, linkUrl}) => (
                        //     <MenuItem key={id} title={title} imageurl={imageUrl} size={size} linkUrl={linkUrl}/>
                        // ))
                        this.state.menuitems.map(({id, ...someOtherParams})=>(
                            <MenuItem key={id} {...someOtherParams} />
                        ))
                    }
                </div>
            </>
        )
    }
}

export default Directory;