import React from 'react';

export default ({
  addIdeaVisible,
  onClickAddIdea, // eslint-disable-line react/prop-types
  onClickShowAddIdea, // eslint-disable-line react/prop-types
  onChangeIdeaTitle, // eslint-disable-line react/prop-types
  onChangeIdeaStatus, // eslint-disable-line react/prop-types
  ideaTitle, // eslint-disable-line react/prop-types
  ideaStatus, // eslint-disable-line react/prop-types
}) => (
	<section>
		<p style={{display: addIdeaVisible ? 'block' : 'none' }}>
			<input type = "text" name = "ideaTitle" placeholder = "Description" onChange = {onChangeIdeaTitle} value = ""/>
			<input type = "text" name = "ideaStatus" placeholder = "" onChange = {onChangeIdeaStatus} value = "unfinished" />
			<button onClick={onClickAddIdea.bind(null)}>Добави</button>
		</p>
		<button  onClick={onClickShowAddIdea.bind(null)}>Add Idea</button>
	</section>
);