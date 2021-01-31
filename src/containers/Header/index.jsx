import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './index.css'

class Header extends Component {
    render() {
        return (
            <div className="fixed-header">
                <Link className="home-tag" to="/home">首頁</Link>
                {this.props.header}
                <hr/>
                ...tags
            </div>
        )
    }
}

export default connect(
    state => ({header: state.header})
)(Header)