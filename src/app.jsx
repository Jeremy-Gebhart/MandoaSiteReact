import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import AppContainer from './components/layout/main/main.jsx';
import "./app.scss";
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

render(
<Provider store={createStoreWithMiddleware(reducers)}>
    <AppContainer />
</Provider>,
document.getElementById("root"));