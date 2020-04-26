import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import state from './state';
import { Provider } from 'react-redux'
import {createStore} from 'redux'
import allReducers from './providers';

import CarsList from "./containers/cars-list";

const store = createStore(allReducers);

ReactDOM.render(
      <BrowserRouter>
          <React.StrictMode>
              <Provider store={store}>
                  {/*<App state={state} />*/}
                  <CarsList/>
              </Provider>
          </React.StrictMode>
      </BrowserRouter>
  ,
  document.getElementById('root')
);