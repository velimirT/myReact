import React from 'react';

export default ({
  book, // eslint-disable-line react/prop-types
  onClickDelete, // eslint-disable-line react/prop-types
  onClickShowEditBook, // eslint-disable-line react/prop-types
}) => (
	<li className = "bookItem">
		<h1>{book.title}</h1>
		<p>{book.users}<span className="edit" >Edit</span></p>
		<p onClick={onClickDelete.bind(null, book.id)}>Delete</p>
		<button  onClick={onClickShowEditBook.bind(null, book)}>Edit</button>
	</li>
);