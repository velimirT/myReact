import React, { Component } from 'react';
import { Map as ImmutableMap } from 'immutable';
import IdeasList from './IdeasList.js';
import AddIdea from './AddIdea.js';
import EditIdea from './EditIdea';

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

  const closeIdeas = () =>
  ImmutableMap()
    .set(null, null)
    .get(<div>|Close|</div>);

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
    } = this.props;
console.log(books);
		return(
		<section style={{display: ideasVisible ? 'block' : 'none' }}>
		<closeIdeas onClick = {onClickCloseIdeas}/>
    <h1>Идей</h1>
    <IdeasList
      error = {error} 
      loading = {loading}
      ideas = {books}
      onClickDeleteIdea = {onClickDeleteIdea}
      onClickShowEditIdea = {onClickShowEditIdea}
      onClickIdea = {onClickIdea}
      bookSelected = {bookSelected}
      books = {books}
    />
    <AddIdea 
      ideaTitle = {ideaTitle}
      ideaStatus = {ideaStatus} 
      onClickShowAddIdea = {onClickShowAddIdea}
      onClickAddIdea = {onClickAddIdea}
      onChangeIdeaStatus = {onChangeIdeaStatus}
      onChangeIdeaTitle = {onChangeIdeaTitle} 
      {...this.props}
    />
    <ErrorMessage error={error} />
    <LoadingMessage loading={loading} />
    <EditIdea 
      onClickEditIdea = {onClickEditIdea} 
      onChangeIdeaStatus = {onChangeIdeaStatus} 
      onChangeIdeaTitle = {onChangeIdeaTitle}  
      {...this.props}/>
    </section>
		);
	}
}

export default Ideas;