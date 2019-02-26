import Landing from './Landing';


import {getUserWall, getUserWallSuccess, getUserWallFailure,
        getUserProfiles, getUserProfilesSuccess, getUserProfilesFailure, deletePin, deletePinSuccess,
  deletePinFailure
} from '../../actions/board';

import {connect} from 'react-redux';

function mapStateToProps(state) {
  return {user: state.user, board: state.board}
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUserWall: (page) => {
      dispatch(getUserWall(page)).then((response)=>{
        if (response.payload.status === 200) {
          dispatch(getUserWallSuccess(response.payload.data));
        } 
      }).catch(function(err){
          dispatch(getUserWallFailure(err));        
      });      
    },
    getUserProfiles: () => {
      dispatch(getUserProfiles()).then((response)=>{
        if (response.payload.status === 200) {
          dispatch(getUserProfilesSuccess(response.payload.data));
        } 
      }).catch(function(err){
          dispatch(getUserProfilesFailure(err));        
      });       
    },
    deletePin: (pinId) => {
      dispatch(deletePin(pinId)).then((response)=>{
        if (response.payload.status === 200) {
          dispatch(deletePinSuccess(response.payload.data));
        } 
      }).catch(function(err){
          dispatch(deletePinFailure(err));        
      });       
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing);