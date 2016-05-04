// Import react
import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {Router, Route, hashHistory} from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

// Import custom
import configureStore from './store/configureStore';
import Routes from '../routes/index';

const store = configureStore();

export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={hashHistory}>
                    {Routes()}
                </Router>
            </Provider>
        )
    }
}