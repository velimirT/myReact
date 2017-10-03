import React from 'react';

export default ({
  editStepVisible, // eslint-disable-line react/prop-types
  onClickEditStep, // eslint-disable-line react/prop-types
  onChangeStepDescription, // eslint-disable-line react/prop-types
  onChangeStepStatus, // eslint-disable-line react/prop-types
  onChangeStepAssignee,
  step, // eslint-disable-line react/prop-types
  bookSelected,
  ideaSelected,
  editStepId, // eslint-disable-line react/prop-types
}) => (
	<section style={{display: (editStepVisible && (editStepId == step.id)) ? 'block' : 'none' }}>
		<p>
			<input type = "text" name = "title" placeholder = "Title" onChange = {onChangeStepDescription} defaultValue = {step.description}/>
			<input type = "text" name = "users" placeholder = "checked/unchecked" onChange = {onChangeStepStatus} defaultValue = {step.status} />
  <input type = "text" name = "stepAssignee" placeholder = "assignee" onChange = {onChangeStepAssignee} defaultValue = {step.assignee}/>
	  <button onClick={onClickEditStep.bind(null)}>Редактирай</button>
		</p>
	</section>
);