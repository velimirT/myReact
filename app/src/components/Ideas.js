import React, { Component } from 'react';
import { Map as ImmutableMap } from 'immutable';
import IdeasList from './IdeasList.js';
import AddIdea from './AddIdea.js';

const LoadingMessage = ({ loading }) =>
  ImmutableMap()
    .set(null, null)
    .get(
      loading,
      (<em>{loading}</em>)
	);
  
  const ErrorMessage = ({ error }) =>
  ImmutableMap()
    .set(null, null)
    .get(
      error,
      (<strong>{error}</strong>)
    );

class Ideas extends Component{
  // When component has been rendered, "componentDidMount()"
  // is called. This is where we should perform asynchronous
  // behavior that will change the state of the component.
  // In this case, we're fetching a list of users from
  // the mock API.
  componentDidMount() {
  }

	render(){
		const {
		  books,
      error,
      loading,
      onClickIdea,
      onChangeIdeaStatus,
      onChangeIdeaTitle,
      onClickDeleteIdea,
      onClickShowAddIdea,
      onClickAddIdea,
      onClickShowEditIdea,
      onClickEditIdea,
      ideaTitle,
      ideaStatus,
      IdeasDidMount,
      IdeasWillMount,
      ideasVisible,
      bookSelected,
      onClickCloseIdeas,
      editIdeaVisible,
      editIdeaId,
    } = this.props;

  return(
		<section style={{display: ideasVisible ? 'block' : 'none' }}>
    <h1>Идей</h1>
    <div className = "closeIdeas" onClick = {onClickCloseIdeas}></div>
    {
      books[bookSelected].ideas ?
      <IdeasList
        error = {error} 
        loading = {loading}
        books = {books}
        bookSelected = {bookSelected}
        onClickDeleteIdea = {onClickDeleteIdea}
        onClickShowEditIdea = {onClickShowEditIdea}
        onClickIdea = {onClickIdea}
        editIdeaVisible = {editIdeaVisible}
        onChangeIdeaStatus = {onChangeIdeaStatus}
        onChangeIdeaTitle = {onChangeIdeaTitle} 
        {...this.props}
    />
    :null
    }
    <AddIdea 
      onClickShowAddIdea = {onClickShowAddIdea}
      onClickAddIdea = {onClickAddIdea}
      onChangeIdeaStatus = {onChangeIdeaStatus}
      onChangeIdeaTitle = {onChangeIdeaTitle} 
      {...this.props}
    />
    <ErrorMessage error={error} />
    <LoadingMessage loading={loading} />
    </section>   
		);
	}
}

export default Ideas;