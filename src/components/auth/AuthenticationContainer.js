import Authentication from './Authentication';
import {authorizeCredentials, authorizeCredentialsSuccess, authorizeCredentialsFailure} from '../../actions/user';

import {connect} from 'react-redux';

function mapStateToProps(state) {
  return {user: state.user}
}

const mapDispatchToProps = (dispatch) => {
  return {
    authorizeCredentials: (code) => {
      dispatch(authorizeCredentials(code)).then((response)=>{
        if (response.payload.status === 200) {
          dispatch(authorizeCredentialsSuccess(response.payload.data));
        } else {
          dispatch(authorizeCredentialsFailure(response.payload.error));
        }
      });      
    },  
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Authentication);