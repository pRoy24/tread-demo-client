import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {isEmptyObject, isNonEmptyObject} from '../../utils/ObjectUtils';

class PinLink extends Component {
    componentWillMount() {
      const {match: {params}} = this.props;
      if (params.linkId) {
        this.props.getLinkUrl(params.linkId);
      }
    }
    componentWillReceiveProps(nextProps) {
        const {linkUrl} = nextProps;
        if (isEmptyObject(this.props.linkUrl) && isNonEmptyObject(linkUrl)) {
            window.location = linkUrl.link;
        }
    }
    render() {
          return <i className="fa fa-spinner fa-spin"/>; 
    }
}


export default withRouter(PinLink);