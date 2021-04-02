import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Summary from './index';
import { handleDeleteFaculty } from '../../reducer/actions';

describe('Summary', () => {
  const faculties = [
    {
      id: '1',
      name: 'user1',
    },
    {
      id: '2',
      name: 'user2',
    },
  ];
  const mockedDispatch = jest.fn();

  test('Component rendered successfully!', () => {
    const { container } = render(<Summary faculties={faculties} dispatch={mockedDispatch} />);
    expect(container).toMatchSnapshot();
  });

  test('Table rendered successfully!', () => {
    render(<Summary faculties={faculties} dispatch={mockedDispatch} />);
    expect(screen.getByRole('table')).toBeInTheDocument();
  });

  test('Table header rendered successfully!', () => {
    render(<Summary faculties={faculties} dispatch={mockedDispatch} />);
    expect(screen.getByRole('columnheader', { name: 'ID' })).toBeInTheDocument();
    expect(screen.getByRole('columnheader', { name: 'Name' })).toBeInTheDocument();
  });

  test('Table data rendered successfully!', () => {
    render(<Summary faculties={faculties} dispatch={mockedDispatch} />);
    expect(screen.getByRole('cell', { name: '1' })).toBeInTheDocument();
    expect(screen.getByRole('cell', { name: 'user1' })).toBeInTheDocument();
    expect(screen.getByRole('cell', { name: '2' })).toBeInTheDocument();
    expect(screen.getByRole('cell', { name: 'user2' })).toBeInTheDocument();
  });

  test('Delete faculty handled successfully!', () => {
    render(<Summary faculties={faculties} dispatch={mockedDispatch} />);
    userEvent.click(screen.getAllByRole('button', { name: 'Delete' })[0]);
    expect(mockedDispatch).toHaveBeenNthCalledWith(1, handleDeleteFaculty({ id: '1', name: 'user1' }));
  });
});
