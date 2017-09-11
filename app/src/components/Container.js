import React, { Component } from 'react';
import { render } from 'react-dom';
import Books from './Books';

class Container extends Component {
	onClickBook = (id) => {
	  alert(id);
	}//onClickBook

	render(){
		return(
			<Books onClickBook = {this.onClickBook} />
		);
	}
}

export default Container;