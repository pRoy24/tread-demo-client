import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
const queryString = require('query-string');

class Authentication extends Component {
    componentWillMount() {

        const {location: {search}} = this.props;
        console.log(search);
        const parsed = queryString.parse(search);
        console.log(parsed);
    }
    render() {
        return (
            <div>
              Please wait. Loading.
            </div>
            )
    }
}

export default withRouter(Authentication);