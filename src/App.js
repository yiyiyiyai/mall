import React, { Component } from 'react';
import {LocaleProvider} from 'antd-mobile'
import {HashRouter} from 'react-router-dom'
import Routes from './routes'

class App extends Component {
    render() {
        return (
            <LocaleProvider>
                <HashRouter>
                    <Routes></Routes>
                </HashRouter>
            </LocaleProvider>
        );
    }
}

export default App;
