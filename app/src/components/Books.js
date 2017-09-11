import React, { Component } from 'react';
import { fromJS } from 'immutable';
import { Map as ImmutableMap } from 'immutable';
import { GetBooks } from './api/GetBooks';
import BooksList from './BooksList';
import { DeleteBook } from './api/DeleteBook';
import AddBook from './AddBook';
import { AddBookApi } from './api/AddBookApi';

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
  state = {
    data: fromJS({
      error: null,
	    loading: null,
      books: [],
	    addBookVisible:false,
      title: null,
      users: null,
    }),
  }

  // Getter for "Immutable.js" state data...
  get data() {
    return this.state.data;
  }

  // Setter for "Immutable.js" state data...
  set data(data) {
    this.setState({ data });
  }

  onChangeTitle = (e) => {
    this.data = this.data.set(
      'title',
      e.target.value,
    );
  }

  onChangeUsers = (e) => {
    this.data = this.data.set(
      'users',
      e.target.value,
    );
  }

  onClickDelete = (id) => {
	const index = this.data
      .get('books')
      .findIndex(
        a => a.get('id') === id
      );

	DeleteBook(id).then(
      (result) => {
		this.data = this.data
        .update(
        'books',
          a => a.delete(index)
        );
	   },
      (error) => {
        // When an error occurs, we want to clear
        // the "loading" state and set the "error"
        // state.
        this.data = this.data
          .set('loading', null)
          .set('error', error);
      }
    );	  
  }//onClickDelete
  
  onClickShowAddBook = () => {
    this.data = this.data
        .set('addBookVisible', true);
  }//onClickShowAddBook
  
  onClickAddBook = (title, users) => {
	
  AddBookApi(this.data.get('title'), this.data.get('users')).then(
      (result) => {
    this.data = this.data
        .update(
        'books',
          a => a.push(fromJS({
            id: result.id,
            title: this.data.get('title'),
            users: this.data.get('users'),
          }))
        )
        .set('title', '')
        .set('users', '');
     },
      (error) => {
        // When an error occurs, we want to clear
        // the "loading" state and set the "error"
        // state.
        this.data = this.data
          .set('loading', null)
          .set('error', error);
      }
    );
  }//onClickAddBook
  
  
  // Called before the component is mounted into the DOM
  // for the first time.
  componentWillMount() {
    // Since the component hasn't been mounted yet, it's
    // safe to change the state by calling "setState()"
    // without causing the component to re-render.
    this.data = this.data.set('loading', this.props.loading);
  }

  // When component has been rendered, "componentDidMount()"
  // is called. This is where we should perform asynchronous
  // behavior that will change the state of the component.
  // In this case, we're fetching a list of users from
  // the mock API.
  componentDidMount() {
    GetBooks().then(
      (result) => {
		  console.log('result: '+result);
        // Populate the "users" state, but also
        // make sure the "error" and "loading"
        // states are cleared.
        this.data = this.data
          .set('loading', null)
          .set('error', null)
          .set('books', fromJS(result));
      },
      (error) => {
        // When an error occurs, we want to clear
        // the "loading" state and set the "error"
        // state.
        this.data = this.data
          .set('loading', null)
          .set('error', error);
      }
    );
  }
  
  render() {
	const {
		books,
    title,
    users,
	} = this.data.toJS();
    return (
	<section>
      <BooksList {...this.data.toJS()} onClickDelete = {this.onClickDelete}/>
	  <AddBook title = {title} users = {users} onClickShowAddBook = {this.onClickShowAddBook} onClickAddBook = {this.onClickAddBook} onChangeUsers = {this.onChangeUsers} onChangeTitle = {this.onChangeTitle} {...this.data.toJS()}/>
	</section>
	);
  }
}

Books.defaultProps = {
  loading: 'loading...',
};

export default Books;
