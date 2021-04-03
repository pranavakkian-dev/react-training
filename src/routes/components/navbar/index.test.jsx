import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';
import NavBar from './index';
import { FACULTY_PATH, ROOT_PATH } from '../../../common/constants/routePaths';
import { handleReset } from '../../../common/reducer/action';

describe('NavBar', () => {
  const history = createMemoryHistory();
  const mockedDispatch = jest.fn();

  test('Component rendered successfully!', () => {
    const { container } = render(
      <Router history={history}>
        <NavBar dispatch={mockedDispatch} />
      </Router>,
    );
    expect(container).toMatchSnapshot();
  });

  test('Faculty page navigation successfully!', () => {
    render(
      <Router history={history}>
        <NavBar dispatch={mockedDispatch} />
      </Router>,
    );
    expect(history.location.pathname).toBe(ROOT_PATH);
    userEvent.click(screen.getByRole('link', { name: 'Faculty' }));
    expect(history.location.pathname).toBe(FACULTY_PATH);
  });

  test('Home page navigation successfully!', () => {
    render(
      <Router history={history}>
        <NavBar dispatch={mockedDispatch} />
      </Router>,
    );
    expect(history.location.pathname).toBe(FACULTY_PATH);
    userEvent.click(screen.getByRole('link', { name: 'Home' }));
    expect(history.location.pathname).toBe(ROOT_PATH);
  });

  test('Logout button working properly!', () => {
    render(
      <Router history={history}>
        <NavBar dispatch={mockedDispatch} />
      </Router>,
    );
    userEvent.click(screen.getByRole('button', { name: 'Logout' }));
    expect(mockedDispatch).toHaveBeenNthCalledWith(1, handleReset());
  });
});
