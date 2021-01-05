import styled from 'styled-components'

import {CustomButtonContainer} from "../custom-button/custom-button.styles"

export const CollectionItemContainer = styled.div`
    width: 22vw;
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;
    position: relative;

    &:hover{
        // cursor: pointer;

        .image{
            opacity: 0.7;
        }
        .custom-button{
            opacity: 0.85;
            display: inline;
        }
    }
`

export const CollectionImageContainer = styled.div.attrs((props) => ({
    className: 'image'
}))`
    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
`

export const CollectionFooterContainer = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
`

export const ItemName = styled.span`
    width: 90%;
    margin-bottom: 15px;
`

export const ItemPrice = styled.span`
    width: 10%;
`

export const AddButton = styled(CustomButtonContainer).attrs((props)=>({
    className: 'custom-button'
}))`
    width: 70%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
`
