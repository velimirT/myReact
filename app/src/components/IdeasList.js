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
    onClickIdea, // eslint-disable-line react/prop-types
    onClickDeleteIdea, //eslint-disable-line react/prop-types
    onClickShowEditIdea, //eslint-disable-line react/prop-types
    ErrorMessage,
    LoadingMessage,
    bookSelected,
    } = this.props;
    console.log(books);
      var ideas = books[bookSelected].ideas;
      alert(books.toString());
      return(
        <section>
          <ul>
            {Object.keys(ideas).map( i => (
              <IdeaItem 
                idea = {ideas[i]} 
                key = {ideas[i].id} 
                onClickDeleteIdea={onClickDeleteIdea} 
                onClickShowEditIdea = {onClickShowEditIdea} 
                onClickIdea = {onClickIdea} />
            ))}
        </ul> 
      </section>
    );
  }
}

export default IdeasList;