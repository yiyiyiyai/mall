import React, { Component } from 'react'
import {Route,Switch} from 'react-router-dom'

import Index from "./pages/Index";
import NotFount from "./pages/NotFount";

class Routes extends Component {
    render(){
        return (
            <div style={{height:"100%",overflow: 'hidden'}}>
                <Switch>
                    <Route path='/404' component={NotFount}></Route>
                    <Route component={Index}></Route>
                </Switch>
            </div>
        )
    }
}

export default Routes