import React, {Component} from 'react';

export default class UserHome extends Component {
    componentWillMount() {
        this.props.getUserWall();
    }
    render() {
        return (
            <div>
            
            </div>
            )
    }
}