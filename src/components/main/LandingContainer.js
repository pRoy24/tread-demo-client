import Landing from './Landing';


import {getUserWall, getUserWallSuccess, getUserWallFailure} from '../../actions/board';

import {connect} from 'react-redux';

function mapStateToProps(state) {
  return {user: state.user, board: state.board}
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUserWall: (code) => {
      dispatch(getUserWall(code)).then((response)=>{
        if (response.payload.status === 200) {
          dispatch(getUserWallSuccess(response.payload.data));
        } else {
          dispatch(getUserWallFailure(response.payload.error));
        }
      });      
    },  
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing);