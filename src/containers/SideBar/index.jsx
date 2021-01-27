import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Layout, Menu } from 'element-react'
import { push } from 'react-router-redux'
import {_history} from '../../redux/store'

class SideBar extends Component {
    navTo = (params) => {
        console.log('nav to', push)    
        _history.push('/upload')
    }

    render() {
        console.log('SideBar', this.props)
        const {datas} = this.props
        return (
            <Layout.Col span={3} className="sidebar">
                <Menu defaultActive={datas[0].id} className="el-menu-vertical-demo" style={{height: '100%'}} onSelect={this.navTo}>
                    {datas.map(data => <Menu.Item key={data.id} index={data.id}><i className={`el-icon-${data.icon}`}></i>{data.title}</Menu.Item>)}
                </Menu>
            </Layout.Col>
        )
    }
}

export default connect(
    state => ({datas: state.datas, routing: state.router})
)(SideBar)