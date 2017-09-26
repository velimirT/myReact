import React from 'react';

export default ({
  book, // eslint-disable-line react/prop-types
  onClickDelete, // eslint-disable-line react/prop-types
  onClickBook, // eslint-disable-line react/prop-types
  onClickShowEditBook, // eslint-disable-line react/prop-types
}) => (
	<li className = "bookItem">
		<h1>{book.title}</h1>
		<p>Users: {book.users}</p>
		<div className = 'go'  onClick = {onClickBook.bind(null, book)}></div>
		<button  onClick={onClickShowEditBook.bind(null, book)}>Edit</button>
		<button onClick={onClickDelete.bind(null, book.id)}>Delete</button>
	</li>
);