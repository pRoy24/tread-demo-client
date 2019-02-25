import ProfileWall from './ProfileWall';

import {getProfileWall, getProfileWallSuccess, getProfileWallFailure} from '../../actions/board';

import {connect} from 'react-redux';

function mapStateToProps(state) {
  return {board: state.board}
}

const mapDispatchToProps = (dispatch) => {
  return {
    getProfileWall: (userName, page) => {
      dispatch(getProfileWall(userName, page)).then((response)=>{
        if (response.payload.status === 200) {
          dispatch(getProfileWallSuccess(response.payload.data));
        } 
      }).catch(function(err){
          dispatch(getProfileWallFailure(err));        
      });           
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileWall);