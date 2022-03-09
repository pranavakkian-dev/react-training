import Store from './index';

describe('Store', () => {
  test('Store initialized successfully!', () => {
    // When & Then
    expect(Store.getState()).toStrictEqual(
      {
        Reducer: {
          loggedIn: false,
          userName: null,
        },
        FacultyReducer: {
          faculties: [],
        },
      },
    );
  });
});
