import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Limitedsale extends Component {
    static propTypes = {
        data:PropTypes.array.isRequired
    };
    render() {
        return (
            <div className="limitedsale">
                <div className="sale-header">
                    <span className="header-sale">限时抢购</span>
                    {/*倒计时*/}
                    {/*更多，点击展开*/}
                    <span className="header-more">更多</span><br/>
                </div>
                <div className="saleitem">
                {
                    this.props.data.map((item, i) => {
                        return (
                            /*限时抢购的商品*/
                            <a key={i} className="item">
                                {/*图片*/}
                                <img className="item-img" src={item.img} alt=""/>
                                {/*名称*/}
                                <div className="item-name">
                                    <span>{item.name}</span>
                                </div>
                                <div className="item-desc">
                                    <div className="desc-bag">
                                        {/*折后价*/}
                                        <div className="item-discountprice">
                                            <span>￥{item.discountprice}</span>
                                        </div>
                                        {/*原价*/}
                                        <div className="item-price">
                                            <span>￥{item.price}</span>
                                        </div>
                                    </div>
                                    {/*加入购物车*/}
                                    <div className="item-add">
                                        <img className="item-addtocart"
                                             src={require('../../common/images/cart_active.png')} alt=""/>
                                    </div>
                                </div>
                            </a>
                        )
                    })
                }
                </div>
            </div>
        )
    }
}
export default Limitedsale;

