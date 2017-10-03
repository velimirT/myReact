import React from 'react';

export default ({
  addStepVisible,
  onClickAddStep, // eslint-disable-line react/prop-types
  onClickShowAddStep, // eslint-disable-line react/prop-types
  onChangeStepDescription, // eslint-disable-line react/prop-types
  onChangeStepStatus, // eslint-disable-line react/prop-types
  onChangeStepAssignee,
}) => (
	<section>
		<p style={{display: addStepVisible ? 'block' : 'none' }}>
			<input type = "text" name = "stepTitle" placeholder = "Description" onChange = {onChangeStepDescription}/>
			<input type = "text" name = "stepStatus" placeholder = "" onChange = {onChangeStepStatus} value = "unfinished" disabled = "true" />
			<input type = "text" name = "stepAssignee" placeholder = "assignee" onChange = {onChangeStepAssignee} />
			<button onClick={onClickAddStep.bind(null)}>Добави</button>
		</p>
		<button  onClick={onClickShowAddStep.bind(null)}>Add Idea</button>
	</section>
);