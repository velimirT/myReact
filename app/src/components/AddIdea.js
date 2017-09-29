import React from 'react';

export default ({
  addIdeaVisible,
  onClickAddIdea, // eslint-disable-line react/prop-types
  onClickShowAddIdea, // eslint-disable-line react/prop-types
  onChangeIdeaTitle, // eslint-disable-line react/prop-types
  onChangeIdeaStatus, // eslint-disable-line react/prop-types
}) => (
	<section>
		<p style={{display: addIdeaVisible ? 'block' : 'none' }}>
			<input type = "text" name = "ideaTitle" placeholder = "Description" onChange = {onChangeIdeaTitle}/>
			<input type = "text" name = "ideaStatus" placeholder = "" onChange = {onChangeIdeaStatus} value = "unfinished" disabled = "true" />
			<button onClick={onClickAddIdea.bind(null)}>Добави</button>
		</p>
		<button  onClick={onClickShowAddIdea.bind(null)}>Add Idea</button>
	</section>
);