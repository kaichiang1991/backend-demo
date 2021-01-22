import { Layout, Menu } from 'element-react'
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import store from '../../redux/store'
import './index.css'

class SideBar extends Component {

    navTo = (event)=> {
        const {history} = this.props
        const {options} = store.getState()
        const option = options.find(option => option.id === event)
        history.push(option.path)
    }
    
    render() {
        const {options} = store.getState()

        return (
            <Layout.Col span={3} className="sidebar">
              <Menu defaultActive={options[0].id} className="el-menu-vertical-demo" style={{height: '100%'}} onSelect={this.navTo}>
                {options.map(option => <Menu.Item key={option.id} index={option.id}><i className={`el-icon-${option.icon}`}></i>{option.title}</Menu.Item>)}
              </Menu>
            </Layout.Col>
        )
    }
}

export default withRouter(SideBar)