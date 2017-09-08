import React from 'react';

export default ({
  addBookVisible,
  onClickAddBook, // eslint-disable-line react/prop-types
}) => (
	<section>
		<p style={{display: addBookVisible ? 'block' : 'none' }}>Add book input</p>
		<button  onClick={onClickAddBook.bind(null)}>Add Book</button>
	</section>
);