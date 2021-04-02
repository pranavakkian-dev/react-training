import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { Suspense } from 'react';
import userEvent from '@testing-library/user-event';
import Store from '../../redux/store';
import Routes from './index';

describe('Routes', () => {
  const history = createMemoryHistory();
  test('Component rendered successfully!', () => {
    const { container } = render(
      <Router history={history}>
        <Provider store={Store}>
          <Suspense fallback={<h1>Loading...</h1>}>
            <Routes />
          </Suspense>
        </Provider>
      </Router>,
    );
    expect(container).toMatchSnapshot();
  });

  test('User logged in and navigated to home page successfully!', async () => {
    render(
      <Router history={history}>
        <Provider store={Store}>
          <Suspense fallback={<h1>Loading...</h1>}>
            <Routes />
          </Suspense>
        </Provider>
      </Router>,
    );
    expect(screen.queryByRole('heading', { name: 'Welcome, admin' })).not.toBeInTheDocument();
    userEvent.type(screen.getByRole('textbox', { name: 'User Name:' }), 'admin');
    userEvent.type(screen.getByLabelText('Password:'), 'admin');
    userEvent.click(screen.getByRole('button', { name: 'Submit' }));
    await screen.findByRole('heading', { name: 'Welcome, admin' });
    expect(screen.getByRole('heading', { name: 'Welcome, admin' })).toBeInTheDocument();
  });

  test('User navigated to crate faculty page successfully!', async () => {
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
    await screen.findByRole('heading', { name: 'Add Faculty' });
    expect(screen.getByRole('heading', { name: 'Add Faculty' })).toBeInTheDocument();
  });

  test('User navigated back to home page successfully!', () => {
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
    expect(screen.getByRole('heading', { name: 'Welcome, admin' })).toBeInTheDocument();
  });

  test('User logged out and navigated to login page successfully!', () => {
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
    expect(screen.getByRole('textbox', { name: 'User Name:' })).toBeInTheDocument();
    expect(screen.getByLabelText('Password:')).toBeInTheDocument();
  });
});
