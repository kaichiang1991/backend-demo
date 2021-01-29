import React, { Component } from 'react'
import { connect } from 'react-redux'
import './index.css'

class Header extends Component {
    render() {
        console.log('Header', this.props)
        return (
            <div className="fixed-header">
                {this.props.header}
            </div>
        )
    }
}

export default connect(
    state => ({header: state.header})
)(Header)