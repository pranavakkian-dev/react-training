import reducer from './index';
import initialState from './initialState';
import { handleAddFaculty, handleDeleteFaculty, handleFacultyReset } from './actions';

describe('Reducer', () => {
  const faculty = { id: '1', name: 'user' };

  test('State initialized successfully!', () => {
    // When & Then
    expect(reducer(undefined, { type: '@@INIT' })).toStrictEqual({ ...initialState });
  });

  test('Add faculty handled successfully!', () => {
    // When & Then
    expect(reducer(undefined, handleAddFaculty(faculty)))
      .toStrictEqual({ ...initialState, faculties: [faculty] });
  });

  test('Delete faculty handled successfully!', () => {
    // When & Then
    expect(reducer({ faculties: [faculty] }, handleDeleteFaculty(faculty)))
      .toStrictEqual({ ...initialState, faculties: [] });
  });

  test('State reset successfully!', () => {
    // When & Then
    expect(reducer({ faculties: [faculty] }, handleFacultyReset()))
      .toStrictEqual({ ...initialState, faculties: [] });
  });
});
