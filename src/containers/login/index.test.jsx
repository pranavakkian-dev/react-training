import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import Login from './index';
import Store from '../../common/redux/store';

describe('Login', () => {
  test('Component render successfully!', () => {
    // When
    const { container } = render(
      <Provider store={Store}>
        <Login />
      </Provider>,
    );

    // Then
    expect(container).toMatchSnapshot();
  });

  test('User name input captured successfully!', () => {
    // When
    render(
      <Provider store={Store}>
        <Login />
      </Provider>,
    );

    // Then
    expect(screen.getByRole('textbox', { name: 'User Name:' })).toHaveValue('');

    // When
    userEvent.type(screen.getByRole('textbox', { name: 'User Name:' }), 'admin');

    // Then
    expect(screen.getByRole('textbox', { name: 'User Name:' })).toHaveValue('admin');
  });

  test('Password input captured successfully!', () => {
    // When
    render(
      <Provider store={Store}>
        <Login />
      </Provider>,
    );

    // Then
    expect(screen.getByLabelText('Password:')).toHaveValue('');

    // When
    userEvent.type(screen.getByLabelText('Password:'), 'admin');

    // Then
    expect(screen.getByLabelText('Password:')).toHaveValue('admin');
  });

  test('Login un-successful!', () => {
    // When
    render(
      <Provider store={Store}>
        <Login />
      </Provider>,
    );
    userEvent.type(screen.getByRole('textbox', { name: 'User Name:' }), 'user');
    userEvent.type(screen.getByLabelText('Password:'), 'admin');
    userEvent.click(screen.getByRole('button', { name: 'Submit' }));

    // Then
    expect(Store.getState().Reducer.loggedIn).toBeFalsy();
    expect(Store.getState().Reducer.userName).toBe(null);
  });

  test('Login successful!', () => {
    // When
    render(
      <Provider store={Store}>
        <Login />
      </Provider>,
    );
    userEvent.type(screen.getByRole('textbox', { name: 'User Name:' }), 'admin');
    userEvent.type(screen.getByLabelText('Password:'), 'admin');
    userEvent.click(screen.getByRole('button', { name: 'Submit' }));

    // Then
    expect(Store.getState().Reducer.loggedIn).toBeTruthy();
    expect(Store.getState().Reducer.userName).toBe('admin');
  });
});
