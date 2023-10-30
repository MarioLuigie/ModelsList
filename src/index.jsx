import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from "react-redux";

import ContextProvider from "./context/Context";
import store from "./redux/store/store";
import App from './components/App.jsx';

import "./index.scss";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </ContextProvider>
  </React.StrictMode>,
);
