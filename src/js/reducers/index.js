import { combineReducers } from 'redux';
import {
  FETCH_INSTANCE_STATUS,
  RECEIVE_INSTANCE_STATUS,
} from '../actions';

const instanceStatus = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_INSTANCE_STATUS:
      return action.instances;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  instanceStatus,
});

export default rootReducer;
