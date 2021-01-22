import React, { Component } from 'react'
import './App.css'
import Content from './components/Content'
import Footer from './components/Footer'
import Header from './components/Header'
import SideBar from './components/SideBar'

import 'element-theme-default';

export default class App extends Component {

    state = {
        title: '標題',
        navOptions: [
            {id: 'upload', icon: 'upload', title: '上傳', path: '/upload'},
            {id: 'select', icon: 'search', title: '選擇', path: '/select'}
        ]
    }

    render() {
        const {title, navOptions} = this.state

        return (
            <div>
                <Header title={title}/>
                <div id="wrapper">
                    <SideBar navOptions={navOptions}/>
                    <Content navOptions={navOptions}/>
                </div>
                <Footer/>
            </div>
        )
    }
}