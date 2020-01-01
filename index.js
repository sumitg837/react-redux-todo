import React from 'react';
import { render } from 'react-dom'
import {createStore} from 'redux';
import {Provider} from 'react-redux';


import App from './src/components/app'
import tasks from './src/reducers'
import data from './src/helpers'

const store = createStore(
    tasks, data
)


render(
    <Provider store={store} >
        <App />
    </Provider>,
    document.getElementById('root')
)