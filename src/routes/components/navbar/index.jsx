import { memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FACULTY_PATH, ROOT_PATH } from '../../../common/constants/routePaths';
import { handleReset } from '../../../common/reducer/action';

const NavBar = (props) => {
  const { dispatch } = props;

  return (
    <nav>
      <ul>
        <li>
          <Link to={ROOT_PATH}>Home</Link>
        </li>
        <li>
          <Link to={FACULTY_PATH}>Faculty</Link>
        </li>
        <li>
          <button type="button" onClick={() => dispatch(handleReset())}>Logout</button>
        </li>
      </ul>
    </nav>
  );
};

NavBar.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default memo(NavBar);
