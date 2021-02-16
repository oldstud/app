import React from 'react';

import { NavLink } from './style'

export class NavItem extends React.Component {

    render() {
        return (
            <NavLink href={this.props.href} >{this.props.btnName}</NavLink>
        )
    }
}

