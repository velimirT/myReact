import React, {Component} from 'react';
import BookItem from './BookItem';
// This component displays the passed-in "error"
// property as bold text. If it's null, then
// nothing is ren

class BooksList extends Component {
  render() {
    const {
    error, // eslint-disable-line react/prop-types
    loading, // eslint-disable-line react/prop-types
    books, // eslint-disable-line react/prop-types
    onClickBook, // eslint-disable-line react/prop-types
    onClickDelete, //eslint-disable-line react/prop-types
    onClickShowEditBook, //eslint-disable-line react/prop-types
    ErrorMessage,
    LoadingMessage,
    } = this.props;
    return(
    <section>
      <ul>
        {Object.keys(books).map( i => (
          <BookItem 
            book = {books[i]} 
            key = {books[i].id} 
            onClickDelete={onClickDelete} 
            onClickShowEditBook = {onClickShowEditBook} 
            onClickBook = {onClickBook} 
          />
        ))}
      </ul> 
    </section>
  );
  }
}

export default BooksList;