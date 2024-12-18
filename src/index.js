import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/index.css';
import App from '../src/app/App';
import reportWebVitals from './reportWebVitals';
import { store } from './app/store';
import { Provider } from 'react-redux';

async function deferRender() {
  const { worker } = await import('./mocks/browser');
  return worker.start();
};


deferRender().then(() => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </React.StrictMode>
  );
});


