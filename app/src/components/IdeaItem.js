import React from 'react';
import EditIdea from './EditIdea';

export default ({
  idea, // eslint-disable-line react/prop-types
  onClickDeleteIdea, // eslint-disable-line react/prop-types
  onClickIdea, // eslint-disable-line react/prop-types
  onClickShowEditIdea, // eslint-disable-line react/prop-types
  onClickEditIdea,
  onChangeIdeaStatus,
  onChangeIdeaTitle,
  editIdeaVisible,
}) => (
	<li className = "ideaItem">
		<h1>{idea.description}</h1>
		<p>Status: {idea.status}</p>
		<div className = 'go'  onClick = {onClickIdea.bind(null, idea)}></div>
		<button  onClick={onClickShowEditIdea.bind(null, idea)} >Edit</button>
		<button onClick={onClickDeleteIdea.bind(null, idea.id)} >Delete</button>
		{
		idea !== undefined ?
		<EditIdea 
	      onClickEditIdea = {onClickEditIdea} 
	      onChangeIdeaStatus = {onChangeIdeaStatus} 
	      onChangeIdeaTitle = {onChangeIdeaTitle}
	      editIdeaVisible = {editIdeaVisible}
	      idea = {idea}
	      {...this.props}
	      />
	      : null
		}
	</li>
);