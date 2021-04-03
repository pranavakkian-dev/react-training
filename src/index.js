/* istanbul ignore file */
/* eslint-disable react/jsx-filename-extension */
import { StrictMode, Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import ErrorBoundary from './common/components/ErrorBoundary';
import Routes from './routes';
import Store from './redux/store';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={Store}>
      <ErrorBoundary>
        <Suspense fallback={<h1>Loading...</h1>}>
          <StrictMode>
            <Routes />
          </StrictMode>
        </Suspense>
      </ErrorBoundary>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
