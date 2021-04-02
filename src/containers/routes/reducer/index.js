import initialState from './initialState';
import {
  LOGIN, RESET,
} from '../../../common/constants/reducerTypes';

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN:
      return { ...state, loggedIn: true, userName: payload };
    case RESET:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
