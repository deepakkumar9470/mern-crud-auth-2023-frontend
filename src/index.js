import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux'
import store from './store'
// import authReducer from './redux/authSlice';
// const store = configureStore({
//     reducer  : {
//        auth     : authReducer,
//     }
//  });

let persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>

);


