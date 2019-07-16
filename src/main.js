import React from 'react'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch, HashRouter } from 'react-router-dom';
import reducers from './reducers';
import routes from './routes';
import Navbar from './components/navbar';
import Footer from './components/footer';

const state = {
  login: false,
  jwt: ''
}

const store = createStore(reducers)

const render = ReactDOM.render(
  <div style={{padding:"0 10px"}}>
  <Provider store={store}>
    <BrowserRouter>
      <React.Fragment>
        <Navbar />
        {
          routes.map((route, index) => (
            <Route key={index + '-route'} path={route.path} component={route.component} exact></Route>
          ))
        }
        <Footer />
      </React.Fragment>
    </BrowserRouter>
  </Provider>
  </div>,
  document.getElementById("app")
)

store.subscribe(render);

