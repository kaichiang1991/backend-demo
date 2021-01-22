import React, { Component } from 'react'
import './index.css'

export default class Header extends Component {
    render() {
        const {title} = this.props

        return (
            <div id="header">
                <h1>{title}</h1>
            </div>
        )
    }
}
