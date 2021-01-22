import { Layout, Menu } from 'element-react'
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './index.css'

class SideBar extends Component {

    navTo = (event)=> {
        const {history, navOptions} = this.props
        const option = navOptions.find(option => option.id === event)
        history.push(option.path)
    }
    
    render() {
        const {navOptions} = this.props

        return (
            <Layout.Col span={3} className="sidebar">
              <Menu defaultActive={navOptions[0].id} className="el-menu-vertical-demo" style={{height: '100%'}} onSelect={this.navTo}>
                {navOptions.map(option => <Menu.Item key={option.id} index={option.id}><i className={`el-icon-${option.icon}`}></i>{option.title}</Menu.Item>)}
              </Menu>
            </Layout.Col>
        )
    }
}

export default withRouter(SideBar)