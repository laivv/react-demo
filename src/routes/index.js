import React from 'react';
import Index from '../components/Index';
import Blog from '../components/Blog';
import { Route, Switch } from 'react-router-dom';

export default class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={Index} exact />
        <Route path="/blog" component={Blog} />
      </Switch>
    )
  }
}

