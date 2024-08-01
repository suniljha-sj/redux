import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import Home from './Home';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import ChangeVal from './ChangeVal';
import { Store } from './store/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element = {<Home />} >
      <Route path="/change" element={<ChangeVal />} />
     
    </Route>

    </>
  )
);
root.render(
  <React.StrictMode>
    <Provider store={Store}>
    <RouterProvider router={routes}/>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
