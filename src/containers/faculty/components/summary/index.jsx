import { memo } from 'react';
import PropTypes from 'prop-types';
import { handleDeleteFaculty } from '../../reducer/actions';

const Summary = (props) => {
  const { faculties, dispatch } = props;

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {faculties.map((faculty) => (
          <tr key={faculty.id}>
            <td>{faculty.id}</td>
            <td>{faculty.name}</td>
            <td>
              <button type="button" onClick={() => dispatch(handleDeleteFaculty(faculty))}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

Summary.propTypes = {
  faculties: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default memo(Summary);
