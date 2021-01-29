import React, { Component } from 'react'
import './App.css'
import Content from './containers/Content'
import Footer from './components/Footer'
import Header from './containers/Header'
import SideBar from './containers/SideBar'

import 'element-theme-default';
import store from './redux/store'

export default class App extends Component {

    state = {
        title: '標題'
    }

    render() {
        const {title} = this.state
        const {options} = store.getState()

        return (
            <>
                <Header/>
                <div id="wrapper">
                    <SideBar/>
                    <Content navOptions={options}/>
                </div>
                <Footer/>
            </>
        )
    }
}