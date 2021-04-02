import { handleLogin, handleReset } from './index';

describe('Action', () => {
  test('handleLogin', () => {
    expect(handleLogin('user')).toStrictEqual({
      payload: 'user', type: 'LOGIN',
    });
  });

  test('handleReset', () => {
    expect(handleReset()).toStrictEqual({ type: 'RESET' });
  });
});
