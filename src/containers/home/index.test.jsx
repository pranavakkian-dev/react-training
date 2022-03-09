import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Home from './index';
import Store from '../../common/redux/store';

describe('Home', () => {
  test('Component rendered successfully!', () => {
    // When
    const { container } = render(
      <Provider store={Store}>
        <Home />
      </Provider>,
    );

    // Then
    expect(container).toMatchSnapshot();
  });
});
