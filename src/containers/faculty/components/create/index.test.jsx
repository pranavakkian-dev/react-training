import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Create from './index';
import { handleAddFaculty } from '../../reducer/actions';

describe('Create', () => {
  const mockedDispatch = jest.fn();

  test('Component rendered successfully!', () => {
    // When
    const { container } = render(<Create dispatch={mockedDispatch} />);

    // Then
    expect(container).toMatchSnapshot();
  });

  test('Heading rendered successfully!', () => {
    // When
    render(<Create dispatch={mockedDispatch} />);

    // Then
    expect(screen.getByRole('heading', { name: 'Add Faculty' })).toBeInTheDocument();
  });

  test('ID input captured successfully!', () => {
    // When
    render(<Create dispatch={mockedDispatch} />);

    // Then
    expect(screen.getByRole('spinbutton', { name: 'ID:' })).toHaveValue(null);

    // When
    userEvent.type(screen.getByRole('spinbutton', { name: 'ID:' }), '100');

    // Then
    expect(screen.getByRole('spinbutton', { name: 'ID:' })).toHaveValue(100);
  });

  test('Name input captured successfully!', () => {
    // When
    render(<Create dispatch={mockedDispatch} />);

    // Then
    expect(screen.getByRole('textbox', { name: 'Name:' })).toHaveValue('');

    // When
    userEvent.type(screen.getByRole('textbox', { name: 'Name:' }), 'user');

    // Then
    expect(screen.getByRole('textbox', { name: 'Name:' })).toHaveValue('user');
  });

  test('Faculty created successfully!', () => {
    // When
    render(<Create dispatch={mockedDispatch} />);
    userEvent.type(screen.getByRole('spinbutton', { name: 'ID:' }), '100');
    userEvent.type(screen.getByRole('textbox', { name: 'Name:' }), 'user');
    userEvent.click(screen.getByRole('button', { name: 'Submit' }));

    // Then
    expect(mockedDispatch).toHaveBeenNthCalledWith(1, handleAddFaculty({ id: '100', name: 'user' }));
    expect(screen.getByRole('spinbutton', { name: 'ID:' })).toHaveValue(null);
    expect(screen.getByRole('textbox', { name: 'Name:' })).toHaveValue('');
  });

  test('Faculty creation un-successful!', () => {
    // When
    render(<Create dispatch={mockedDispatch} />);
    userEvent.click(screen.getByRole('button', { name: 'Submit' }));

    // Then
    expect(mockedDispatch).not.toHaveBeenCalled();
  });
});
