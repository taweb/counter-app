import Counter from '../components/Counter';
import {connect} from 'react-redux';

const mapStateToProps = (state) => ({
  counter: state.counter,
  history: state.history,
});

const mapDispatchToProps = (dispatch) => ({
  updateCounter: (operation) => {
    dispatch({
      type: 'UPDATE_COUNTER',
      payload: operation
    })
  } 
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);