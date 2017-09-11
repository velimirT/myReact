import React from 'react';
import { Map as ImmutableMap } from 'immutable';
import BookItem from './BookItem';
// This component displays the passed-in "error"
// property as bold text. If it's null, then
// nothing is ren

export default ({
  error, // eslint-disable-line react/prop-types
  loading, // eslint-disable-line react/prop-types
  books, // eslint-disable-line react/prop-types
  onClickDelete, //eslint-disable-line react/prop-types
  onClickShowEditBook, //eslint-disable-line react/prop-types
  ErrorMessage,
  LoadingMessage,
}) => (
  <section>
    <ul>
      {books.map(i => (
        <BookItem book = {i} key = {i.title} onClickDelete={onClickDelete} onClickShowEditBook = {onClickShowEditBook}/>
      ))}
    </ul>	
  </section>
);
