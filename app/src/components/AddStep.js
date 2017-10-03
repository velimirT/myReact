import React from 'react';

export default ({
  addStepVisible,
  onClickAddStep, // eslint-disable-line react/prop-types
  onClickShowAddStep, // eslint-disable-line react/prop-types
  onChangeStepDescription, // eslint-disable-line react/prop-types
  onChangeStepStatus, // eslint-disable-line react/prop-types
}) => (
	<section>
		<p style={{display: addStepVisible ? 'block' : 'none' }}>
			<input type = "text" name = "ideaTitle" placeholder = "Description" onChange = {onChangeStepDescription}/>
			<input type = "text" name = "ideaStatus" placeholder = "" onChange = {onChangeStepStatus} value = "unfinished" disabled = "true" />
			<button onClick={onClickAddStep.bind(null)}>Добави</button>
		</p>
		<button  onClick={onClickShowAddStep.bind(null)}>Add Idea</button>
	</section>
);