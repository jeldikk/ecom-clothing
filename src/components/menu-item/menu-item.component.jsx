import React from 'react'

import {withRouter} from 'react-router-dom'

// import "./menu-item.styles.scss"

import {MenuItemContainer, BackgroundImageContainer, ContentContainer, TitleContainer, SubtitleContainer} from "./menu-item.styles"

const MenuItem = ({title, imageUrl, size, linkUrl, history, match})=>{

    // console.log(history);
    // console.log(location);
    // console.log(match);

    return (
        <MenuItemContainer size={size} onClick={()=>history.push(`${match.url}${linkUrl}`)}>
            {/* <div className="background-image" style={{backgroundImage:`url(${imageUrl})`}} /> */}
            <BackgroundImageContainer style={{backgroundImage:`url(${imageUrl})`}} />
            <ContentContainer>
                <TitleContainer>{title.toUpperCase()}</TitleContainer>
                <SubtitleContainer>SHOP NOW</SubtitleContainer>
            </ContentContainer>
        </MenuItemContainer>
    )
}

export default withRouter(MenuItem);
// export default MenuItem;