import { handleAddFaculty, handleDeleteFaculty, handleFacultyReset } from './index';
import { ADD_FACULTY, DELETE_FACULTY, FACULTY_RESET } from '../../../../common/constants/reducerTypes';

describe('Actions', () => {
  test('handleAddFaculty', () => {
    expect(handleAddFaculty('test')).toStrictEqual({
      type: ADD_FACULTY,
      payload: 'test',
    });
  });

  test('handleDeleteFaculty', () => {
    expect(handleDeleteFaculty('test')).toStrictEqual({
      type: DELETE_FACULTY,
      payload: 'test',
    });
  });

  test('handleFacultyReset', () => {
    expect(handleFacultyReset('test')).toStrictEqual({
      type: FACULTY_RESET,
    });
  });
});
