import React from 'react';

export default ({
  editBookVisible, // eslint-disable-line react/prop-types
  onClickEditBook, // eslint-disable-line react/prop-types
  onChangeTitle, // eslint-disable-line react/prop-types
  onChangeUsers, // eslint-disable-line react/prop-types
  title, // eslint-disable-line react/prop-types
  users, // eslint-disable-line react/prop-types
  editBookId, // eslint-disable-line react/prop-types
}) => (
	<section>
		<p style={{display: editBookVisible ? 'block' : 'none' }}>
			<input type = "text" name = "title" placeholder = "Title" onChange = {onChangeTitle} value = {title}/>
			<input type = "text" name = "users" placeholder = "user1, user2" onChange = {onChangeUsers} value = {users} />
			<button onClick={onClickEditBook.bind(null)}>Редактирай</button>
		</p>
	</section>
);