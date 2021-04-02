import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import Store from '../../redux/store';
import Faculty from './index';

describe('Faculty', () => {
  test('Component rendered successfully!', () => {
    const { container } = render(
      <Provider store={Store}>
        <Faculty />
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });

  test('Faculty created and displayed successfully!', () => {
    render(
      <Provider store={Store}>
        <Faculty />
      </Provider>,
    );
    userEvent.type(screen.getByRole('spinbutton', { name: 'ID:' }), '101');
    userEvent.type(screen.getByRole('textbox', { name: 'Name:' }), 'user1');
    userEvent.click(screen.getByRole('button', { name: 'Submit' }));
    userEvent.type(screen.getByRole('spinbutton', { name: 'ID:' }), '102');
    userEvent.type(screen.getByRole('textbox', { name: 'Name:' }), 'user2');
    userEvent.click(screen.getByRole('button', { name: 'Submit' }));
    expect(screen.getByRole('cell', { name: '101' })).toBeInTheDocument();
    expect(screen.getByRole('cell', { name: 'user1' })).toBeInTheDocument();
    expect(screen.getByRole('cell', { name: '102' })).toBeInTheDocument();
    expect(screen.getByRole('cell', { name: 'user2' })).toBeInTheDocument();
  });

  test('Faculty deleted and removed from the table successfully!', () => {
    render(
      <Provider store={Store}>
        <Faculty />
      </Provider>,
    );
    userEvent.type(screen.getByRole('spinbutton', { name: 'ID:' }), '101');
    userEvent.type(screen.getByRole('textbox', { name: 'Name:' }), 'user1');
    userEvent.click(screen.getByRole('button', { name: 'Submit' }));
    userEvent.click(screen.getByRole('button', { name: 'Delete' }));
    expect(screen.queryByRole('cell', { name: '101' })).not.toBeInTheDocument();
    expect(screen.queryByRole('cell', { name: 'user1' })).not.toBeInTheDocument();
  });

  test('Store reset on un-mount successfully!', () => {
    const { unmount } = render(
      <Provider store={Store}>
        <Faculty />
      </Provider>,
    );
    userEvent.type(screen.getByRole('spinbutton', { name: 'ID:' }), '101');
    userEvent.type(screen.getByRole('textbox', { name: 'Name:' }), 'user1');
    userEvent.click(screen.getByRole('button', { name: 'Submit' }));
    expect(Store.getState().FacultyReducer.faculties).toHaveLength(1);
    unmount();
    expect(Store.getState().FacultyReducer.faculties).toHaveLength(0);
  });
});
