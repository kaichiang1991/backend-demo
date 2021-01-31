import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Layout, Menu } from 'element-react'
import { push } from 'react-router-redux'
import './index.css'
import {changeTitle} from '../../redux/actions/header'
import { SET, TO_HOME } from '../../redux/constant'

class SideBar extends Component {
    navTo = (event) => {
        const {nav, changeTitle, datas} = this.props
        const chooseData = datas.map(data => data.datas.find(obj => obj.id === event)).filter(result => result)[0]
        nav(chooseData.path)
        console.log('choose', chooseData)
        if(chooseData.title === '首頁'){
            changeTitle(TO_HOME)
        }else{
            changeTitle(SET, [chooseData.title])
        }
    }

    render() {
        const {datas} = this.props
        return (
            <div className="side-bar-container">
                <Layout.Col span={8} className="side-bar">
                <Menu mode="vertical" defaultActive="1" className="el-menu-vertical-demo side-bar" onSelect={this.navTo}>
                {
                    datas.map(data =>
                        <Menu.ItemGroup key={data.id} title={data.group}>
                            {data.datas.map(_data => <Menu.Item key={_data.id} index={_data.id}><i className={`el-icon-${_data.icon}`}></i>{_data.title}</Menu.Item>)}
                        </Menu.ItemGroup>
                    )
                }
                </Menu>
                </Layout.Col>
            </div>
        )
    }
}

export default connect(
    state => ({datas: state.datas, routing: state.routing}),
    {
        nav: (path)=> push(path),
        changeTitle
    }
)(SideBar)