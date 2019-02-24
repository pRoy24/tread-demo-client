import Authentication from './Authentication';

import {connect} from 'react-redux';

function mapStateToProps(state) {
  return {user: state.user}
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Authentication);