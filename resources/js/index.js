//Fundamentals
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { PersistGate } from 'redux-persist/integration/react';


//Redux
import { Provider } from "react-redux";
import { store, persistor } from './store/index';


ReactDOM.render(
<Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
    <App />
  </PersistGate>
</Provider>, document.getElementById('root'));  