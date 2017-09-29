import React, { Component } from 'react';
import { Map as ImmutableMap } from 'immutable';
import BooksList from './BooksList';
import AddBook from './AddBook';
import EditBook from './EditBook';

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

  
class Books extends Component {
  // Called before the component is mounted into the DOM
  // for the first time.

  // When component has been rendered, "componentDidMount()"
  // is called. This is where we should perform asynchronous
  // behavior that will change the state of the component.
  // In this case, we're fetching a list of users from
  // the mock API.
  
  render() {

	const {
		books,
    title,
    users,
    error,
    loading,
    onClickBook,
    onChangeUsers,
    onChangeTitle,
    onClickDelete,
    onClickShowAddBook,
    onClickAddBook,
    onClickShowEditBook,
    onClickEditBook,
    booksVisible,
  } = this.props;

  return (
	<section style={{display: booksVisible ? 'block' : 'none' }}>
    <h1>Книги</h1>
    <BooksList
      error = {error} 
      loading = {loading}
      books = {books}
      onClickDelete = {onClickDelete}
      onClickShowEditBook = {onClickShowEditBook}
      onClickBook = {onClickBook}
      {...this.props}
    />
	  <AddBook 
      title = {title}
      users = {users} 
      onClickShowAddBook = {onClickShowAddBook}
      onClickAddBook = {onClickAddBook}
      onChangeUsers = {onChangeUsers}
      onChangeTitle = {onChangeTitle} 
      {...this.props}
    />
    <ErrorMessage error={error} />
    <LoadingMessage loading={loading} />
    <EditBook 
      onClickEditBook = {onClickEditBook} 
      onChangeUsers = {onChangeUsers} 
      onChangeTitle = {onChangeTitle}
      {...this.props}/>
	</section>
	);
  }
}

Books.defaultProps = {
  loading: 'loading...',
};

export default Books;
