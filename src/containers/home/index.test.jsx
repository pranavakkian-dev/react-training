import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Home from './index';
import Store from '../../redux/store';

describe('Home', () => {
  test('Component rendered successfully!', () => {
    const { container } = render(
      <Provider store={Store}>
        <Home />
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});
