import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Featured extends Component {
    static propTypes = {
        data:PropTypes.array.isRequired
    };
    render() {
        return (
            <div className="featured">
                <div className="featured-header">
                    <span className="header">特色专区</span>
                </div>
                {
                    this.props.data.map((item, i) => {
                        return (
                            <div className="featureditem">
                                <a key={i} className="item">
                                    {/*名称*/}
                                    <div className="item-name">
                                        <span>{item.name}</span>
                                    </div>
                                    {/*描述*/}
                                    <div className="item-desc">
                                        <span>{item.desc}</span>
                                    </div>
                                    {/*图片*/}
                                    <div className="item-img">
                                        <img className="item-img1" src={item.img1} alt=""/>
                                        <img className="item-img2" src={item.img2} alt=""/>
                                    </div>
                                </a>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Featured;

