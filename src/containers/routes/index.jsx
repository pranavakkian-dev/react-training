import { lazy, memo } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ROOT_PATH } from '../../common/constants/routePaths';
import NavBar from './components/navbar';

const Login = lazy(() => import('../login'));
const Home = lazy(() => import('../home'));

const Routes = () => {
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.Reducer.loggedIn);

  return (
    <>
      <NavBar loggedIn={loggedIn} dispatch={dispatch} />
      {!loggedIn
        ? (
          <Switch>
            <Route exact path={ROOT_PATH} component={Login} />
          </Switch>
        )
        : (
          <Switch>
            <Route exact path={ROOT_PATH} component={Home} />
          </Switch>
        )}
    </>
  );
};

export default memo(Routes);
