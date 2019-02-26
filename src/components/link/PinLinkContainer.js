import PinLink from './PinLink';

import {getLinkUrl, getLinkUrlSuccess, getLinkUrlFailure} from '../../actions/board';

import {connect} from 'react-redux';

function mapStateToProps(state) {
  return {linkUrl: state.board.linkUrl}
}

const mapDispatchToProps = (dispatch) => {
  return {
    getLinkUrl: (hash) => {
      dispatch(getLinkUrl(hash)).then((response)=>{
        if (response.payload.status === 200) {
          dispatch(getLinkUrlSuccess(response.payload.data));
        } 
      }).catch(function(err){
          dispatch(getLinkUrlFailure(err));        
      });           
    },
    

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PinLink);