import React, { Component } from 'react';
import { Map as ImmutableMap } from 'immutable';
import StepsList from './StepsList';
import AddStep from './AddStep';

class Steps extends Component {

	render (){
		const {
			books,
			bookSelected,
			ideaSelected,
			stepSelected,
			stepsVisible,
			addStepVisible,
	  	    onChangeStepStatus,
	        onChangeStepDescription,
      		onClickDeleteStep,
		    onClickShowAddStep,
     		 onClickAddStep,
      		onClickShowEditStep,
     		 onClickEditStep,
      		editStepVisible,
		    stepDescription,
		    stepStatus,
		    editStepId,
		    onClickCloseSteps,
		} = this.props;
		//steps = books[bookSelected].ideas[ideaSelected].steps !== undefined ? books[bookSelected].ideas[ideaSelected].steps : null;
		return(
			<section style={{display: stepsVisible ? 'block' : 'none' }}>
				<h1>Стъпки</h1>
				<div className = "closeSteps" onClick = {onClickCloseSteps}></div>
				    {
				      books[bookSelected].ideas[ideaSelected].steps ?
				      <StepsList
				      	steps = {books[bookSelected].ideas[ideaSelected].steps}
				      	stepSelected = {stepSelected}
				      	onClickEditStep = {onClickEditStep}
				      	onClickShowEditStep = {onClickShowEditStep}
				      	onClickDeleteStep = {onClickDeleteStep}
				      	editStepVisible = {editStepVisible}
				      	onChangeStepDescription = {onChangeStepDescription}
				      	onChangeStepStatus = {onChangeStepStatus}
				      	editStepId = {editStepId}
				      	{...this.props}
				      />
				      :null
				  	}
				  	<AddStep 
				  		onClickShowAddStep = {onClickShowAddStep}
				  		onClickAddStep = {onClickAddStep}
				  		onChangeStepStatus = {onChangeStepStatus}
				  		onChangeStepDescription = {onChangeStepDescription}
				  		addStepVisible = {addStepVisible}
				  	/>
			</section>
		);
	}//render

}

export default Steps;