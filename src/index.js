import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

// Redux imports
import configureStore from "./redux-store/configure-store";
import {Provider} from "react-redux";

// import test from "./redux-store/test";

ReactDOM.render(
   <Provider store={configureStore}>
      <BrowserRouter>
         <App />
      </BrowserRouter>
   </Provider>,

   document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
