import React, { Component } from 'react'
import {Route,Switch,Redirect} from 'react-router-dom'

//import NavFooter from '../components/Navfooter'
import Main from './Main'
import Cate from './Cate'
//import My from './My'
import Cart from './Cart'


class Index extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Main}></Route>
                <Route exact path="/index" render={() => <Redirect to="/"/>}></Route>
                <Route exact path="/cate" component={Cate}></Route>
                <Route path="/cate" component={Cate}></Route>
                <Route exact path="/cart" component={Cart}></Route>
                {/*<Route component={My}></Route>*/}
            </Switch>
        );
    }
}

export default Index;