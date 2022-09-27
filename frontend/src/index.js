import React, { Suspense } from "react";
import ReactDOM from 'react-dom';
import { App } from './Components/App';

import './i18nextInit';

import './index.css';


ReactDOM.render(
  <Suspense fallback="...">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Suspense>,
  document.getElementById('root')
);
