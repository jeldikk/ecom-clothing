import styled from 'styled-components'

export const BackgroundImageContainer = styled.div.attrs((props) => ({
    className: 'background-image'
}))`

    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: center;

`

export const MenuItemContainer = styled.div`
    min-width: 30%;
    height: ${props => props.size ? '380px' : '240px'};
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    margin: 0 7.5px 15px;
    overflow: hidden;

    &:first-child{
        margin-right: 7.5px;
    }

    &:last-child{
        margin-left: 7.5px;
    }

    &:hover{
        cursor: pointer;

        & .background-image{
            transform: scale(1.1);
            transition: transform 6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        & .content{
            opacity: 0.9;
        }
    }
`

export const ContentContainer = styled.div.attrs((props) => ({
    className: 'content'
}))`
    height: 90px;
    padding: 0 25px;
    display: flex;
    position: absolute;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    background-color: rgba(255, 255, 255, 0.7);
`


export const TitleContainer = styled.h1`
    font-weight: bold;
    margin-bottom: 6px;
    font-size: 22px;
    color: $title_color;
`

export const SubtitleContainer = styled.span`

    font-weight: lighter;
    font-size: 16px;

`