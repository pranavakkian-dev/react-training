import { combineReducers } from 'redux';
import Reducer from '../reducer';
import FacultyReducer from '../../../containers/faculty/reducer';

const RootReducer = combineReducers({ Reducer, FacultyReducer });

export default RootReducer;
