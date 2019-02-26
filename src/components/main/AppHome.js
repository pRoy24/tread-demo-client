import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import {isNonEmptyArray} from '../../utils/ObjectUtils';
import {Link} from 'react-router-dom';

export default class AppHome extends Component {
    componentWillMount() {
        this.props.getUserProfiles();
    }
    render() {
      const {board, board: {userProfiles}} = this.props;
      let userProfileList = <span/>;
      if (isNonEmptyArray(userProfiles)) {
          userProfileList = userProfiles.map(function(item, idx){
              return <UserProfileTile user={item} key={"profile-img"+idx}/>
          })
      }
      return (
        <Row>
           {userProfileList}
        </Row>
            )
    }
}

class UserProfileTile extends Component {
    render() {
        const {user, user: {userName, name}} = this.props;
        return (
        <Col lg={3}>
        <Link to={`/user/${userName}`}>
          <img src={user.avatar_url} className="profile-img"/>
          <div className="user-detail">
           <div> Username {userName}</div>
            <div>Name {name}</div>
          </div>
        </Link>
        </Col>)
    }
}