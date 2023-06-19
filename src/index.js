import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import {BrowserRouter} from "react-router-dom";
import catalogSlice from "./components/store/catalogSlice";
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));


const store = configureStore({
    reducer: {
      catalog: catalogSlice,
    }
  }
)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
