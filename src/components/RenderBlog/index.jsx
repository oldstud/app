import React from 'react'
import { FullNameP, ImgStyle, TextP, TitleP, WrapperDiv } from './styles'

export const RenderBlog = (props) => {

    let blog = props.data.map((item, index) =>
        <WrapperDiv key={index}>
            <TitleP>{item.title}</TitleP>
            <FullNameP> by {item.fullName}</FullNameP>
            <TextP>{item.text}</TextP>

            <ImgStyle src={`${item.photo}`} alt={item.title}></ImgStyle>

        </WrapperDiv >
    )
    return (
        <div>
            {blog}
        </div>
    )
}