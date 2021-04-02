import { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { handleAddFaculty } from '../../reducer/actions';

const Create = (props) => {
  const { dispatch } = props;
  const [facultyId, setFacultyId] = useState('');
  const [facultyName, setFacultyName] = useState('');

  const handleSubmit = () => {
    if (facultyId && facultyName) {
      const faculty = {
        id: facultyId,
        name: facultyName,
      };
      dispatch(handleAddFaculty(faculty));
      setFacultyId('');
      setFacultyName('');
    }
  };

  return (
    <>
      <h4>Add Faculty</h4>
      <label htmlFor="facultyId">
        ID:
        <br />
        <input id="facultyId" type="number" value={facultyId} onChange={(event) => setFacultyId(event.target.value)} />
      </label>
      <br />
      <label htmlFor="facultyName">
        Name:
        <br />
        <input id="facultyName" value={facultyName} onChange={(event) => setFacultyName(event.target.value)} />
      </label>
      <br />
      <button type="button" onClick={handleSubmit}>Submit</button>
    </>
  );
};

Create.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default memo(Create);
