import {
  LOGIN, RESET,
} from '../../../../common/constants/reducerTypes';

export const handleLogin = (username) => ({
  type: LOGIN,
  payload: username,
});

export const handleReset = () => ({
  type: RESET,
});
