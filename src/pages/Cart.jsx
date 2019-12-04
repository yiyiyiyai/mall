import React, { Component } from 'react';
import {Button} from 'antd-mobile'


class Cart extends Component {
    render() {
        return (
            <div className="main-box">
                /*定位和消息提醒*/
                <div className="header">
                    /*购物车&删除*/
                    <div>
                        <span>购物车</span>
                        <button>删除</button>
                    </div>
                    /*领券*/
                    <div>

                    </div>
                </div>
                <div className="body">
                    /*商品列表*/
                </div>
                <div className="footer">
                    /*全选&合计&结算*/
                    <div>
                        <span>全选</span>
                        <button>去结算</button>
                    </div>
                </div>
            </div>

        );
    }
}

export default Cart;