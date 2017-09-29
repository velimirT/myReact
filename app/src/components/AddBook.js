import React from 'react';

export default ({
  addBookVisible,
  onClickAddBook, // eslint-disable-line react/prop-types
  onClickShowAddBook, // eslint-disable-line react/prop-types
  onChangeTitle, // eslint-disable-line react/prop-types
  onChangeUsers, // eslint-disable-line react/prop-types
  title, // eslint-disable-line react/prop-types
  users, // eslint-disable-line react/prop-types
}) => (
	<section>
		<p style={{display: addBookVisible ? 'block' : 'none' }}>
			<input type = "text" name = "title" placeholder = "Title" onChange = {onChangeTitle}/>
			<input type = "text" name = "users" placeholder = "user1, user2" onChange = {onChangeUsers} />
			<button onClick={onClickAddBook.bind(null)}>Добави</button>
		</p>
		<button  onClick={onClickShowAddBook.bind(null)}>Add Book</button>
	</section>
);