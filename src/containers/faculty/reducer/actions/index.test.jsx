import { handleAddFaculty, handleDeleteFaculty, handleFacultyReset } from './index';
import { ADD_FACULTY, DELETE_FACULTY, FACULTY_RESET } from '../../../../common/constants/reducerTypes';

describe('Actions', () => {
  test('handleAddFaculty', () => {
    // When & Then
    expect(handleAddFaculty('test')).toStrictEqual({
      type: ADD_FACULTY,
      payload: 'test',
    });
  });

  test('handleDeleteFaculty', () => {
    // When & Then
    expect(handleDeleteFaculty('test')).toStrictEqual({
      type: DELETE_FACULTY,
      payload: 'test',
    });
  });

  test('handleFacultyReset', () => {
    // When & Then
    expect(handleFacultyReset('test')).toStrictEqual({
      type: FACULTY_RESET,
    });
  });
});
