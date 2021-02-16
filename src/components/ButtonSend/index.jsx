import React from 'react'
import { ButtonSendStyle } from './styles'

export const ButtonSend = (props) => {
    return (
        <ButtonSendStyle
            onClick={() => props.click()}
        >PUBLICATE...</ButtonSendStyle>
    )
}