import { memo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { handleLogin } from '../../redux/reducer/action';

const Login = () => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    if (userName === 'admin' && password === 'admin') {
      dispatch(handleLogin(userName));
    }
  };

  return (
    <>
      <label htmlFor="username">
        User Name:
        <br />
        <input id="username" value={userName} onChange={(event) => setUserName(event.target.value)} />
      </label>
      <br />
      <label htmlFor="password">
        Password:
        <br />
        <input id="password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      </label>
      <br />
      <button type="button" onClick={handleSubmit}>Submit</button>
    </>
  );
};

export default memo(Login);
