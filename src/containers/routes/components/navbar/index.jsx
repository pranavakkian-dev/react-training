import { memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ROOT_PATH } from '../../../../common/constants/routePaths';
import { handleReset } from '../../../../redux/reducer/action';

const NavBar = (props) => {
  const { loggedIn, dispatch } = props;
  return (
    <nav>
      <ul>
        <li>
          <Link to={ROOT_PATH}>Home</Link>
        </li>
        {loggedIn && (
          <li>
            <button type="button" onClick={() => dispatch(handleReset())}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

NavBar.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default memo(NavBar);
