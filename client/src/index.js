import React from 'react';
import ReactDOM from 'react-dom';
import './styles/tailwind.css';
import 'react-toastify/dist/ReactToastify.css'
import App from './App';
import { AuthProvider as Provider } from '../src/context/AuthContext';
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
