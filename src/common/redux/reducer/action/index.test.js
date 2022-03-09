import { handleLogin, handleReset } from './index';

describe('Action', () => {
  test('handleLogin', () => {
    // When & Then
    expect(handleLogin('user')).toStrictEqual({
      payload: 'user', type: 'LOGIN',
    });
  });

  test('handleReset', () => {
    // When & Then
    expect(handleReset()).toStrictEqual({ type: 'RESET' });
  });
});
