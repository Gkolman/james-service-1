import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

import { Provider } from 'react-redux';
import { store } from './redux/store';

const Index = () => {
  return (
    <App />
  )
}

ReactDOM.render(<App />, document.getElementById('root'));