import React from 'react';

export default ({
  editIdeaVisible, // eslint-disable-line react/prop-types
  onClickEditIdea, // eslint-disable-line react/prop-types
  onChangeIdeaTitle, // eslint-disable-line react/prop-types
  onChangeIdeaStatus, // eslint-disable-line react/prop-types
  ideaTitle, // eslint-disable-line react/prop-types
  ideaStatus, // eslint-disable-line react/prop-types
  editIdeaId, // eslint-disable-line react/prop-types
}) => (
	<section>
		<p style={{display: editIdeaVisible ? 'block' : 'none' }}>
			<input type = "text" name = "title" placeholder = "Title" onChange = {onChangeIdeaTitle} value = {ideaTitle}/>
			<input type = "text" name = "users" placeholder = "user1, user2" onChange = {onChangeIdeaStatus} value = {ideaStatus} />
			<button onClick={onClickEditIdea.bind(null)}>Редактирай</button>
		</p>
	</section>
);