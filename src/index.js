// External libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Polyfills
import '@babel/polyfill';

// Components
import MainApp from './components/MainApp';
import ErrorBoundary from './components/ErrorBoundary';

// Styles
import './styles.css';

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <MainApp />
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('app')
);