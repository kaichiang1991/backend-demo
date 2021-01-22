import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import store from './redux/store';

const render = ()=>{
    ReactDOM.render(
        <BrowserRouter>
            <App />
        </BrowserRouter>,
        document.getElementById('root')
    );
}

render()
store.subscribe(render)