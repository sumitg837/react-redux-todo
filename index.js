import React from 'react';
import { render } from 'react-dom'
import { createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import App from './src/components/app'
import tasks from './src/reducers'
import data from './src/helpers'

const store = createStore(
    tasks, data,
    applyMiddleware(thunk)
)


render(
    <Provider store={store} >
        <App />
    </Provider>,
    document.getElementById('root')
)