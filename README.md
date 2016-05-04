
# React Redux Simple Starter Kit
This project is a simple starter for developing with react,  redux & hot loader.
> Simple, Clean, Flexibility and Fast development

It uses an example from [redux-example](https://github.com/yildizberkay/redux-example)

## Demo online
[http://redux500.firebaseapp.com/](http://redux500.firebaseapp.com/)
Demo:

![demo gif][demo]
[demo]: https://media.giphy.com/media/l0K4nEi6sb8txzvvG/giphy.gif

## About
Using technologies:
* [React](https://github.com/facebook/react)
* [React Router](https://github.com/rackt/react-router)
* [React Hot Loader](https://github.com/gaearon/react-hot-loader)
* [Babel](http://babeljs.io) for ES6 and ES7 magic
* [Webpack](http://webpack.github.io) for bundling
* [style-loader](https://github.com/webpack/style-loader), [sass-loader](https://github.com/jtangelder/sass-loader) and [less-loader](https://github.com/webpack/less-loader) to allow import of stylesheets in plain css, sass and less,
* [Redux](https://github.com/rackt/redux)'s futuristic [Flux](https://facebook.github.io/react/blog/2014/05/06/flux.html) implementation
* [Redux Dev Tools Extensions](https://github.com/zalmoxisus/redux-devtools-extension) for next generation DX (developer experience).
* [React-bootstrap](https://react-bootstrap.github.io/) Bootstrap component
* [Bootstrap-sass](https://github.com/twbs/bootstrap-sass) import scss to app
* [FontAwesome](fortawesome.github.io/Font-Awesome/icons/) font icons

## Installation
``` code
git clone https://github.com/thanhtungdp/redux-500api
cd redux-500api
npm install
```

## Running dev server
``` code
npm run dev 
(or npm run start)
```
Default server is running on port `8080`. If you want to change, you can edit at `configs/webpack_dev.js`. 
Go to: `http://localhost:8080`

## Building production
``` code
npm run buid
```
It generates static file `public/bundle.js`.

You can run `public/index.html`

## Directory structure
```
Root
├── app
│   ├── api
│   ├── components
|	├── redux
|	|	├── actions
|	|	├── reducers
|	|	├── actions
|	|	├── containers
|	|	├── Root.js
│   ├── routes
│   ├── stylesheets
│   ├── views
│   ├── App.js
├── configs
|	├── webpack_dev.js
├── public
|	├── index.html
├── package.json
├── server.js
└── webpack.config.js
```

## Import other sass packages
Edit at `app/App.js`
Example:
``` javascript
import '../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import '../node_modules/font-awesome/scss/font-awesome.scss'
import './stylesheets/style.scss';
```
## Using with react router
You can edit at `app/routes/index.js`
``` javascript
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
```
## Documents
* [Awesome Redux](https://github.com/xgrommx/awesome-redux)
* [Redux offical docs](http://redux.js.org/)
* [Redux example es6](https://github.com/yildizberkay/redux-example) 
