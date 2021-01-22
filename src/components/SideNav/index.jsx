import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './index.css'

export default class SideNav extends Component {
    render() {

        console.log('pr', this.props)
        return (
            <div>
                <i className="el-icon-upload"></i>
                <NavLink className='side-nav' {...this.props}/>
            </div>
        )
    }
}
