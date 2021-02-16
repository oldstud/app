import React from 'react';

import { CustomInpitStyle } from './styles';

export const CustomInput = (props) => {
    const { name, someEvent, value, placeholder } = props;

    return (<CustomInpitStyle
        placeholder={placeholder}
        type="text"
        name={name}
        value={value}
        onChange={
            (event) => someEvent(event)} />

    )
}