import React from 'react';

export default ({
  editIdeaVisible, // eslint-disable-line react/prop-types
  onClickEditIdea, // eslint-disable-line react/prop-types
  onChangeIdeaTitle, // eslint-disable-line react/prop-types
  onChangeIdeaStatus, // eslint-disable-line react/prop-types
  idea, // eslint-disable-line react/prop-types
  bookSelected,
  ideaSelected,
  editIdeaId, // eslint-disable-line react/prop-types
}) => (
	<section style={{display: (editIdeaVisible && (editIdeaId == idea.id)) ? 'block' : 'none' }}>
		<p>
			<input type = "text" name = "title" placeholder = "Title" onChange = {onChangeIdeaTitle} defaultValue = {idea.description}/>
			<input type = "text" name = "users" placeholder = "user1, user2" onChange = {onChangeIdeaStatus} defaultValue = {idea.status} />
      <button onClick={onClickEditIdea.bind(null)}>Редактирай</button>
		</p>
	</section>
);