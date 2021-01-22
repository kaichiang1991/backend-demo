import React, { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import store from '../../redux/store'
import ChooseFile from '../pages/ChooseFiile'
import Upload from '../pages/Upload'
import './index.css'

const compMap = {
    '/upload': Upload,
    '/select': ChooseFile
}

export default class Content extends Component {
    render() {
        const {options} = store.getState()

        return (
            <div id="content">
                <Switch>
                    {options.map(option => <Route key={option.id} path={option.path} component={compMap[option.path]}></Route>)}
                    <Redirect to={options[0].path}/>
                </Switch>
            </div>
        )
    }
}
