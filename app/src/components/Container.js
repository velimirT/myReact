import React, { Component } from 'react';
import { render } from 'react-dom';
import Books from './Books';
import Ideas from './Ideas';
import { fromJS } from 'immutable';
import { Map as ImmutableMap } from 'immutable';
import { GetBooks } from './api/GetBooks';
import BooksList from './BooksList';
import { DeleteBook } from './api/DeleteBook';
import AddBook from './AddBook';
import { AddBookApi } from './api/AddBookApi';
import EditBook from './EditBook';
import { EditBookApi } from './api/EditBookApi'

class Container extends Component {
	state = {
	    data: fromJS({
	      error: null,
		    loading: null,
	      books: {26:{id:26,ideas:[]}},
	      addBookVisible:false,
	      editBookVisible:false,
        editIdeaVisible:false,
	      editBookId: null,
	      title: '',
	      users: '',
        ideaTitle: '',
        ideaStatus:'',
	      ideasVisible: false,
	      booksVisible: true,
        addIdeaVisible:false,
        bookSelected: 26,
        ideaSelected: 7,
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

	onClickBook = (book) => {
	  this.data = this.data
	  	.set('booksVisible', false)
	  	.set('ideasVisible', true)
      .set('bookSelected', book.id);
      alert(this.data.get('bookSelected'));
//      alert(this.data.get('books')[bookSelected].toString());
	}//onClickBook


  onChangeUsers = (e) => {
    this.data = this.data.set(
      'users',
      e.target.value,
    );
  }

  	onChangeTitle = (e) => {
	    this.data = this.data.set(
	      'title',
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
	alert('test');
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
  
  
  onClickShowEditBook = (book) => {
    this.data = this.data
        .set('editBookVisible', true)
        .set('editBookId', book.id)
        .set('title', book.title)
        .set('users', book.users);
  }//onClickShowEditBook
  
  onClickEditBook = (title, users, editBookId) => {
  
  EditBookApi(this.data.get('title'), this.data.get('users'), this.data.get('editBookId')).then(
      (result) => {
      const index = this.data
      .get('books')
      .findIndex(
        a => a.get('id') === this.data.get('editBookId')
      );

    this.data = this.data
      .update(
        'books',
        books => books.update(
          index,
          a => a.set(
            'title',
            this.data.get('title')
          ).set(
            'users',
            this.data.get('users')
          )
        )
      ).set('title', '')
        .set('users', '')
        .set('editBookVisible', false);

              
        
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
  }//onClickEditBook

  componentWillMount(){
    
}

	componentDidMount() {	
    this.data = this.data.set('loading', this.loading);
    GetBooks().then(
        (result) => {
          // Populate the "users" state, but also
          // make sure the "error" and "loading"
          // states are cleared.
          this.data = this.data
            .set('loading', null)
            .set('error', null)
            .set('books', fromJS(result.books));
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
	}//BooksDidMount

  onClickCloseIdeas = () => {
    this.data = this.data
      .set('ideasVisible', false)
      .set('booksVisible', true)
      .set('bookSelected', null);
  }//onClickCloseIdeas

  onClickAddIdea = () => {
    alert('test');
  }

  onClickShowAddIdea = () => {
    this.data = this.data
      .set('onClickShowAddIdea', true);
  }

  onClickEditIdea = () => {
    this.data = this.data
      .set('editIdeaVisible', true);
  }

  onClickIdea = (idea) => {
     alert('click idea:' + idea.id);
  }

  onClickShowEditIdea = () => {
    this.data = this.data
      .set('editIdeaVisible', true);
  }

  onClickDeleteIdea = () => {
    alert('deleted');
  }

	render(){
		return(
			<section>
				<Ideas 
          ideasVisible = {this.data.get('ideasVisible')} 
          ideaSelected = {this.data.get('ideaSelected')} 
          onClickCloseIdeas = {this.onClickCloseIdeas}
          onClickAddIdea = {this.onClickAddIdea}
          onClickShowAddIdea = {this.onClickShowAddIdea}
          onClickEditIdea = {this.onClickEditIdea}
          onClickIdea = {this.onClickIdea}
          bookSelected = {this.bookSelected}
          onClickShowEditIdea = {this.onClickShowEditIdea}
          onClickDeleteIdea = {this.onClickDeleteIdea}
          {...this.data.toJS()}
        />
				<Books 
					onClickBook = {this.onClickBook} 
					onChangeUsers = {this.onChangeUsers}  
					onChangeTitle = {this.onChangeTitle}
					onClickDelete = {this.onClickDelete}
					onClickShowAddBook = {this.onClickShowAddBook}
					onClickAddBook = {this.onClickAddBook}
					onClickShowEditBook = {this.onClickShowEditBook}
					onClickEditBook = {this.onClickEditBook}
					booksVisible = {this.data.get('booksVisible')}
					{...this.data.toJS()}
				/>

			</section>
		);
	}

}//Container

export default Container;