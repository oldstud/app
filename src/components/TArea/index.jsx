import React from 'react'

import { TAreaStyle } from './styles'

export const TArea = (props) => {
    const { name, someEvent, value, placeholder } = props;
    return (
        < TAreaStyle
            placeholder={placeholder}
            name={name}
            onChange={
                (event) => someEvent(event)}
            value={value}
            cols="30"
            rows="10">  </ TAreaStyle >
    )
}