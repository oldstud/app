import React from 'react';

import { NavItem } from '../NavItem'

import { HeaderStyle } from './styles'


export class Header extends React.Component {
    render() {
        return (
            <HeaderStyle>
                <NavItem btnName="Home" href="https://oldstud.github.io/"></NavItem>
                <NavItem btnName="Blog"></NavItem>
                <NavItem btnName="Add article" href="#addArticle"></NavItem>
            </HeaderStyle>
        )
    }
} 