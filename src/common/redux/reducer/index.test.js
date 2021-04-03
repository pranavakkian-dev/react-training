import reducer from './index';
import initialState from './initialState';
import { handleLogin, handleReset } from './action';

describe('Reducer', () => {
  test('State initialized successfully!', () => {
    expect(reducer(undefined, { type: '@@INIT' })).toStrictEqual({ ...initialState });
  });

  test('Login handled successfully!', () => {
    expect(reducer(undefined, handleLogin('user')))
      .toStrictEqual({ ...initialState, loggedIn: true, userName: 'user' });
  });

  test('State reset successfully!', () => {
    expect(reducer({ loggedIn: true, userName: 'user' }, handleReset()))
      .toStrictEqual({ ...initialState, loggedIn: false, userName: null });
  });
});
