import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Catebtn extends Component {
    static propTypes = {
        data:PropTypes.array.isRequired
    };

    render() {
        return (
            <ul className="cateul">
                {
                    this.props.data.map((item, i) => {
                        return (
                            <li key={i} className="cateli">
                                <input type="button" className="imgbtn"/><br/>
                                <span className="descbtn">{item.title}</span>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}
export default Catebtn