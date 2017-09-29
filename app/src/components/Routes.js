import React from 'react';
import {
  Router,
  Route,
  browserHistory,
} from 'react-router';

import ideas from './Ideas';
import books from './Books';
import Container from './Container';

export default (
  <Router history={browserHistory}>
    { /* Note the ":" before "id". This denotes
         a dynamic URL segment and the value will
         be available in the "params" property of
         the rendered component. */ }
    <Route path="/" component={Container} />
    <Route path="/ideas/:book" component={ideas} />
  </Router>
);
