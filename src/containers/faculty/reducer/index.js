import initialState from './initialState';
import { FACULTY_RESET, ADD_FACULTY, DELETE_FACULTY } from '../../../common/constants/reducerTypes';

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_FACULTY: {
      const { faculties } = state;
      return { ...state, faculties: [...faculties, { ...payload }] };
    }
    case DELETE_FACULTY: {
      const { faculties } = state;
      const updatedFaculties = faculties.filter((faculty) => faculty !== payload);
      return { ...state, faculties: [...updatedFaculties] };
    }
    case FACULTY_RESET:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
