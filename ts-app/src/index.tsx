/* 元のテンプレートにもともと記載のあったコード
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
 */

import * as React from 'react';
import ReactDOM from 'react-dom';
import { rows } from './data';
import Thead from './thead';
import Tbody from './tbody';

const Component: React.FC = () => (
  <div>
    <h1>健康に関する調査</h1>
    <table>
      <Thead />
      <Tbody rows={rows} />
    </table>
  </div>
)

ReactDOM.render(
  <React.StrictMode>
    <Component />
  </React.StrictMode>,
  document.getElementById('root')
);

export default Component;