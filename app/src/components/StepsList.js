import React, {Component} from 'react';
import StepsItem from './StepsItem';
// This component displays the passed-in "error"
// property as bold text. If it's null, then
// nothing is ren

class StepsList extends Component {
  render() {
    const {
    books, // eslint-disable-line react/prop-types
    bookSelected,
    ideaSelected,
onClickIdea, // eslint-disable-line react/prop-types
    onClickDeleteStep, //eslint-disable-line react/prop-types
    onClickShowEditStep, //eslint-disable-line react/prop-types
    onClickShowAddStep,
    onClickEditStep,
    onClickAddStep,
    editStepVisible,
    onChangeStepStatus,
    onChangeStepDescription,
    editStepId,
    } = this.props;
      return(
        <section>
          <ul>
            {Object.keys(books[bookSelected].ideas[ideaSelected].steps).map( i => (
              <StepsItem 
                step = {books[bookSelected].ideas[ideaSelected].steps[i]} 
                key = {books[bookSelected].ideas[ideaSelected].steps[i].id} 
                editStepId = {editStepId}
                onClickDeleteStep={onClickDeleteStep} 
                onClickShowEditStep = {onClickShowEditStep}
                onClickEditStep = {onClickEditStep}
                editStepVisible = {editStepVisible}
                onChangeStepStatus = {onChangeStepStatus}
                onChangeStepDescription = {onChangeStepDescription} 
              />
            ))}
        </ul> 
      </section>
    );
  }
}

export default StepsList;