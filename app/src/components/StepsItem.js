import React from 'react';
import EditStep from './EditStep';

export default ({
  step, // eslint-disable-line react/prop-types
  onClickDeleteStep, // eslint-disable-line react/prop-types
  onClickShowEditStep, // eslint-disable-line react/prop-types
  onClickEditStep,
  onChangeStepStatus,
  onChangeStepDescription,
  editStepVisible,
  editStepId,
}) => (
	<li className = "ideaItem">
		<h1>{step.description}</h1>
		<p>Status: {step.status}</p>
		<p>Assignee: {step.assignee}</p>
		<button  onClick={onClickShowEditStep.bind(null, step)} >Edit</button>
		<button onClick={onClickDeleteStep.bind(null, step.id)} >Delete</button>
		{
		step !== undefined ?
		<EditStep 
	      onClickEditStep = {onClickEditStep} 
	      onChangeStepStatus = {onChangeStepStatus} 
	      onChangeStepDescription = {onChangeStepDescription}
	      editStepVisible = {editStepVisible}
	      step = {step}
	      editStepId = {editStepId}
	      {...this.props}
	      />
	      : null
		}
	</li>
);