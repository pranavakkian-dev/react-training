import { FACULTY_RESET, ADD_FACULTY, DELETE_FACULTY } from '../../../../common/constants/reducerTypes';

export const handleAddFaculty = (faculty) => ({
  type: ADD_FACULTY,
  payload: faculty,
});

export const handleDeleteFaculty = (faculty) => ({
  type: DELETE_FACULTY,
  payload: faculty,
});

export const handleFacultyReset = () => ({
  type: FACULTY_RESET,
});
