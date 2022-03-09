import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { Suspense } from 'react';
import userEvent from '@testing-library/user-event';
import Store from '../common/redux/store';
import Routes from './index';

describe('Routes', () => {
  const history = createMemoryHistory();
  test('Component rendered successfully!', () => {
    // When
    const { container } = render(
      <Router history={history}>
        <Provider store={Store}>
          <Suspense fallback={<h1>Loading...</h1>}>
            <Routes />
          </Suspense>
        </Provider>
      </Router>,
    );

    // Then
    expect(container).toMatchSnapshot();
  });

  test('User logged in and navigated to home page successfully!', async () => {
    // When
    render(
      <Router history={history}>
        <Provider store={Store}>
          <Suspense fallback={<h1>Loading...</h1>}>
            <Routes />
          </Suspense>
        </Provider>
      </Router>,
    );

    // Then
    expect(screen.queryByRole('heading', { name: 'Welcome, admin' })).not.toBeInTheDocument();
    userEvent.type(screen.getByRole('textbox', { name: 'User Name:' }), 'admin');
    userEvent.type(screen.getByLabelText('Password:'), 'admin');
    userEvent.click(screen.getByRole('button', { name: 'Submit' }));
    await screen.findByRole('heading', { name: 'Welcome, admin' });
    expect(screen.getByRole('heading', { name: 'Welcome, admin' })).toBeInTheDocument();
  });

  test('User navigated to crate faculty page successfully!', async () => {
    // When
    render(
      <Router history={history}>
        <Provider store={Store}>
          <Suspense fallback={<h1>Loading...</h1>}>
            <Routes />
          </Suspense>
        </Provider>
      </Router>,
    );
    userEvent.click(screen.getByRole('link', { name: 'Faculty' }));

    // Then
    await screen.findByRole('heading', { name: 'Add Faculty' });
    expect(screen.getByRole('heading', { name: 'Add Faculty' })).toBeInTheDocument();
  });

  test('User navigated back to home page successfully!', () => {
    // When
    render(
      <Router history={history}>
        <Provider store={Store}>
          <Suspense fallback={<h1>Loading...</h1>}>
            <Routes />
          </Suspense>
        </Provider>
      </Router>,
    );
    userEvent.click(screen.getByRole('link', { name: 'Home' }));

    // Then
    expect(screen.getByRole('heading', { name: 'Welcome, admin' })).toBeInTheDocument();
  });

  test('User logged out and navigated to login page successfully!', () => {
    // When
    render(
      <Router history={history}>
        <Provider store={Store}>
          <Suspense fallback={<h1>Loading...</h1>}>
            <Routes />
          </Suspense>
        </Provider>
      </Router>,
    );
    userEvent.click(screen.getByRole('button', { name: 'Logout' }));

    // Then
    expect(screen.getByRole('textbox', { name: 'User Name:' })).toBeInTheDocument();
    expect(screen.getByLabelText('Password:')).toBeInTheDocument();
  });
});
