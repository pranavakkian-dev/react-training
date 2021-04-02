import { memo, useState } from 'react';

const Faculty = () => {
  const [] = useState();

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
        <input id="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      </label>
      <br />
      <button type="button" onClick={handleSubmit}>Submit</button>
    </>
  );
};

export default memo(Faculty);
