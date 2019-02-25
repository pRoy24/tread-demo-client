import TopNavBar from './TopNavBar';

import {connect} from 'react-redux';

import {loginUser, loginUserSuccess, loginUserFailure,
  authenticateUser, authenticateUserSuccess, authenticateUserFailure
} from '../../actions/user';
import {addPin, addPinSuccess, addPinFailure} from '../../actions/board';


function mapStateToProps(state) {
  return {user: state.user}
}

const mapDispatchToProps = (dispatch) => {
  return {
    authenticateUser: () => {
      dispatch(authenticateUser()).then((response)=>{
        if (response.payload.status === 200) {
          dispatch(authenticateUserSuccess(response.payload.data));
        }
      }).catch(function(err){
          dispatch(authenticateUserFailure(err));        
      });      
    },  
    
    loginUser: () => {
      dispatch(loginUser()).then((response)=>{
        if (response.payload.status === 200) {
          dispatch(loginUserSuccess(response.payload.data));
        } else {
          dispatch(loginUserFailure(response.payload.error));
        }
      });
    },
    addPin: (payload) => {
      dispatch(addPin(payload)).then((response)=>{
        if (response.payload.status === 200) {
          dispatch(addPinSuccess(response.payload.data));
        } else {
          dispatch(addPinFailure(response.payload.error));
        }
      });      
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopNavBar);