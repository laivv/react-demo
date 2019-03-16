import React from 'react'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch, HashRouter } from 'react-router-dom';
import reducers from './reducers';
import routes from './routes';


const state = {
  login: false,
  jwt: ''
}

const store = createStore(reducers)

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <div>
        {
          routes.map((route, index) => (
            <Route key={index + '-route'} path={route.path} component={route.component} exact={route.exact || false}></Route>
          ))
        }
      </div>
    </HashRouter>
  </Provider>,
  document.getElementById("app")
)

