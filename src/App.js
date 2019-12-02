import React,{Component} from 'react';
import logo from '../scripts/logo.svg';
import './App.css';
import {Button} from "antd-mobile";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Button type='primary'>按钮</Button>
            </div>
        );
    }
}

export default App;
