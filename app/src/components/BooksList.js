import React from 'react';
import { Map as ImmutableMap } from 'immutable';
import BookItem from './BookItem';
// This component displays the passed-in "error"
// property as bold text. If it's null, then
// nothing is rendered.
const ErrorMessage = ({ error }) =>
  ImmutableMap()
    .set(null, null)
    .get(
      error,
      (<strong>{error}</strong>)
    );

// This component displays the passed-in "loading"
// property as italic text. If it's null, then
// nothing is rendered.
const LoadingMessage = ({ loading }) =>
  ImmutableMap()
    .set(null, null)
    .get(
      loading,
      (<em>{loading}</em>)
    );

export default ({
  error, // eslint-disable-line react/prop-types
  loading, // eslint-disable-line react/prop-types
  books, // eslint-disable-line react/prop-types
  onClickDelete, //eslint-disable-line react/prop-types
}) => (
  <section>
    <ErrorMessage error={error} />
    <LoadingMessage loading={loading} />
    <ul>
      {books.map(i => (
        <BookItem book = {i} key = {i.title} onClickDelete={onClickDelete}/>
      ))}
    </ul>	
  </section>
);
