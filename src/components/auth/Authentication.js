import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {isNonEmptyObject, isEmptyObject} from '../../utils/ObjectUtils';
const queryString = require('query-string');

class Authentication extends Component {
    componentWillMount() {
        const {location: {search}} = this.props;
        const parsedCode = queryString.parse(search);
        if (parsedCode && parsedCode.code) {
            this.props.authorizeCredentials(parsedCode.code);
        }
    }
    
    componentWillReceiveProps(nextProps) {
        const {user: {currentUser}} = nextProps;

        if (isNonEmptyObject(currentUser) && isEmptyObject(this.props.user.currentUser)) {
            console.log("Got values");
            const url = '/';
            window.opener.open(url, '_self');
            window.opener.focus();
            window.close();
        }
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