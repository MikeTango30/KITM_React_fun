import React, {Component} from 'react';
import './place.scss';


class Place extends Component{
    render() {
        return (
            <div className="place">
                <h2 className="place--name">{ this.props.name }</h2>
            </div>
        )
    }
}

export default Place;