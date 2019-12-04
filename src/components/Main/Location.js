import React, { Component } from 'react';

class Location extends Component {
    render() {
        return (
            <div>
                <a className="location"
                    /*onClick={() => {
                        this.props.goto('../My/address');
                        sessionStorage.setItem('__search_prev_path__', '/my')
                        sessionStorage.removeItem('__address_prev_path__')
                    }}*/
                    >地址管理</a>
            </div>
        );
    }
}
export default Location;