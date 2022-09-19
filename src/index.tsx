import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import store from './plugins/redux/store';

import './plugins/i18next/i18n';
import Loading from './components/utility/loading/Loading';
import ErrorBoundary from './components/utility/error/ErrorBoundary';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={<Loading />}>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </Suspense>
    </Provider>
  </React.StrictMode>
);
