import { memo } from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
  const userName = useSelector((state) => state.Reducer.userName);

  return (
    <h1>
      Welcome,
      {' '}
      {userName}
    </h1>
  );
};

export default memo(Home);
