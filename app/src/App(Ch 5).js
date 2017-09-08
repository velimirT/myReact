import React, { Component } from 'react';
import cuid from 'cuid';
import { fromJS } from 'immutable';

// The list of articles is now rendered by a
// separate component...
import UserListContainer from './UserListContainer';

export default class MyFeature extends Component {

  render() {
	  <UserListContainer
		loading="playing the waiting game..."
	  />
  }
}
