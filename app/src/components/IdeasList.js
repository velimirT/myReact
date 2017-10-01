import React, {Component} from 'react';
import IdeaItem from './IdeaItem';
// This component displays the passed-in "error"
// property as bold text. If it's null, then
// nothing is ren

class IdeasList extends Component {
componentDidMount(){
}
  render() {
    const {
    error, // eslint-disable-line react/prop-types
    loading, // eslint-disable-line react/prop-types
    books, // eslint-disable-line react/prop-types
    bookSelected,
    onClickIdea, // eslint-disable-line react/prop-types
    onClickDeleteIdea, //eslint-disable-line react/prop-types
    onClickShowEditIdea, //eslint-disable-line react/prop-types
    onClickShowAddIdea,
    onClickEditIdea,
    ErrorMessage,
    LoadingMessage,
    id,
    editIdeaVisible,
    onChangeIdeaStatus,
    onChangeIdeaTitle,
    editIdeaId,
    } = this.props;
      return(
        <section>
          <ul>
            {Object.keys(books[bookSelected].ideas).map( i => (
              <IdeaItem 
                idea = {books[bookSelected].ideas[i]} 
                key = {books[bookSelected].ideas[i].id} 
                editIdeaId = {editIdeaId}
                onClickDeleteIdea={onClickDeleteIdea} 
                onClickShowEditIdea = {onClickShowEditIdea}
                onClickShowAddIdea = {onClickShowAddIdea}
                onClickIdea = {onClickIdea}
                onClickEditIdea = {onClickEditIdea}
                editIdeaVisible = {editIdeaVisible}
                onChangeIdeaStatus = {onChangeIdeaStatus}
                onChangeIdeaTitle = {onChangeIdeaTitle} 
              />
            ))}
        </ul> 
      </section>
    );
  }
}

export default IdeasList;