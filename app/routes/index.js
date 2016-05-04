// Import react
import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

// Import components
import AppMaster from '../views/AppMaster';
import SearchAppContainer from '../redux/containers/SearchAppContainer';

export default () => {
    return (
        <Route path="/" component={AppMaster}>
            <IndexRoute component={SearchAppContainer}/>
            <Route path="/search(/:search)" component={SearchAppContainer}></Route>
        </Route>
    )
}