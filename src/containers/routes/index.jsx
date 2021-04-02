import { lazy, memo, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { FACULTY_PATH, ROOT_PATH } from '../../common/constants/routePaths';
import NavBar from './components/navbar';

const Login = lazy(() => import('../login'));
const Home = lazy(() => import('../home'));
const Faculty = lazy(() => import('../faculty'));

const Routes = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const loggedIn = useSelector((state) => state.Reducer.loggedIn);

  useEffect(() => {
    if (!loggedIn)history.push(ROOT_PATH);
  }, [loggedIn]);

  return loggedIn ? (
    <>
      <NavBar dispatch={dispatch} />
      <Switch>
        <Route exact path={ROOT_PATH} component={Home} />
        <Route exact path={FACULTY_PATH} component={Faculty} />
      </Switch>
    </>
  )
    : (
      <Switch>
        <Route exact path={ROOT_PATH} component={Login} />
      </Switch>
    );
};

export default memo(Routes);
