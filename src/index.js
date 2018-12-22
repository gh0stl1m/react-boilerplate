// External libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Polyfills
import '@babel/polyfill';

// Components
import MainApp from './components/MainApp';

// Styles
import './styles.css';

ReactDOM.render(<MainApp />, document.getElementById('app'));