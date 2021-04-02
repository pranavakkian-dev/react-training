import { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Create from './components/create';
import { handleFacultyReset } from './reducer/actions';
import Summary from './components/summary';

const Faculty = () => {
  const dispatch = useDispatch();
  const faculties = useSelector((state) => state.FacultyReducer.faculties);

  useEffect(() => () => {
    dispatch(handleFacultyReset());
  }, []);

  return (
    <>
      <Create dispatch={dispatch} />
      <br />
      <br />
      <Summary faculties={faculties} dispatch={dispatch} />
    </>
  );
};

export default memo(Faculty);
