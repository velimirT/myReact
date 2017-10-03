import React, { Component } from 'react';
import { render } from 'react-dom';
import Books from './Books';
import { fromJS } from 'immutable';
import { Map as ImmutableMap } from 'immutable';
import { GetBooks } from './api/GetBooks';
import { DeleteBook } from './api/DeleteBook';
import { EditBookApi } from './api/EditBookApi';
import { AddBookApi } from './api/AddBookApi';
import { AddStepApi } from './api/AddStepApi';
import { AddIdeaApi } from './api/AddIdeaApi';
import { EditIdeaApi } from './api/EditIdeaApi';
import { DeleteIdea } from './api/DeleteIdeaApi';
import EditBook from './EditBook';
import routes from './Routes';
import Ideas from './Ideas';
import Steps from './Steps';
import { EditStepApi } from './api/EditStepApi';

class Container extends Component {
	state = {
	    data: fromJS({
	      error: null,
		    loading: null,
	      books: [{26:{id:26,ideas:[]}}],
	      addBookVisible:false,
	      editBookVisible:false,
        editIdeaVisible:false,
        editStepVisible: false,
        editIdeaId: null,
	      editBookId: null,
        editStepId: null,
	      title: '',
	      users: '',
        ideaTitle: '',
        ideaStatus:'unfinished',
	      ideasVisible: false,
	      booksVisible: true,
        addIdeaVisible:false,
        bookSelected: 0,
        ideaSelected: 7,
        stepsVisible:false,
        stepSelected: null,
        stepStatus: 'unfinished',
        stepDescription: '',
        addStepVisible: false,
        stepAssignee:'',
	    }),
	}

  // Get for "Immutable.js" state data...
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
      .set('bookSelected', book.id.toString());
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

  onChangeIdeaStatus = (e) => {
    this.data = this.data.set('ideaStatus', e.target.value,);
  }

  onChangeIdeaTitle = (e) => {
    this.data = this.data.set('ideaTitle', e.target.value,);
  }

  onClickDelete = (id) => {
	DeleteBook(id).then(
      (result) => {
            this.data = this.data
            .update(
              'books',
              books => books.delete(
                id.toString()
              )
            )
	  } ,
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
        	.set('addBookVisible', true)
          .set('title', '')
          .set('users', '');
  	}//onClickShowAddBook
  
  onClickAddBook = (ideaTitle, ideaStatus) => {
  AddBookApi(this.data.get('title'), this.data.get('users')).then(
      (result) => {

      const index = this.data
      .get('editBookId');

    this.data = this.data
      .update(
        'books',
        books => books.merge(
          {[result.id]:{
              id: +result.id,
              title: this.data.get('title'),
              users: this.data.get('users'),
            }}
        )
      )
          .set('addBookVisible', false)
          .set('title', '')
          .set('users', '');
//          alert(this.data.get('books').toString());
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
      .get('editBookId');

    this.data = this.data
      .updateIn(['books', this.data.get('editBookId').toString()],
        a => a.set(
            'title',
            this.data.get('title')
          ).set(
            'users',
            this.data.get('users')
          )
        )
       .set('title', '')
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
  }//ContainerWillMount

	componentDidMount() {	
  }//ContainerDidMount

  onClickCloseIdeas = () => {
    this.data = this.data
      .set('ideasVisible', false)
      .set('booksVisible', true)
      .set('bookSelected', null);
  }//onClickCloseIdeas

  onClickAddIdea = (desc, status) => {
          let title = this.data.get('ideaTitle');
          let statusB = this.data.get('ideaStatus');
      AddIdeaApi(this.data.get('ideaTitle'), this.data.get('ideaStatus'), this.data.get('bookSelected')).then(
      (result) => {
        let books = this.data.get('books').toJS();
        if(books[this.data.get('bookSelected')].ideas === undefined){
        this.data = this.data
          .updateIn(['books', this.data.get('bookSelected').toString()], i => i
            .merge(
                {'ideas':
                  {[result.id]:
                  {
                    id: result.id,
                    description: title,
                    status: statusB
                  }
                  }
                }
              )
          );
        }else{
        this.data = this.data
          //ето го проблема, i e undefined, защото ideas още не съществува
          .updateIn(['books', this.data.get('bookSelected'), 'ideas'], i => i
            .merge(
                {[result.id]:{
                  id: result.id,
                  description: title,
                  status: statusB
                }}
              )
          );
        }
      }
        ,(error) => {
        // When an error occurs, we want to clear
        // the "loading" state and set the "error"
        // state.
        this.data = this.data
          .set('loading', null)
          .set('error', error);
      }
    );
  }

  onClickShowAddIdea = () => {
    this.data = this.data
      .set('addIdeaVisible', true);
  }

  onClickEditIdea = (idea) => {
  EditIdeaApi(this.data.get('ideaTitle'), this.data.get('ideaStatus'), this.data.get('editIdeaId')).then(
      (result) => {
        this.data = this.data.updateIn(['books', this.data.get('bookSelected').toString(), 'ideas', this.data.get('editIdeaId')], d => d
               .set('description', this.data.get('ideaTitle'))
               .set('status', this.data.get('ideaStatus'))
              )
              .set('editIdeaVisible', false);
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
  }//onClickEditIdea

  onClickIdea = (idea) => {
      this.data = this.data
        .set('ideaSelected', idea.id.toString())
        .set('ideasVisible', false)
        .set('stepsVisible', true);
  }

  onClickShowEditIdea = (idea) => {
    this.data = this.data
      .set('editIdeaVisible', true)      
      .set('editIdeaId', idea.id)
      .set('ideaStatus', idea.status)
      .set('ideaTitle', idea.description);
  }

  onClickDeleteIdea = (id) => {
  DeleteIdea(id).then(
      (result) => {
       this.data = this.data.deleteIn(['books', this.data.get('bookSelected'), 'ideas', id])
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
  }//onClickDeleteIdea

  onClickCloseSteps = () => {
    this.data = this.data
      .set('stepsVisible', false)
      .set('ideasVisible', true)
      .set('stepSelected', null);
  }//onClickCloseSteps

  onClickShowAddStep = () => {
    this.data = this.data
      .set('addStepVisible', true);
  }

  onChangeStepStatus = (e) => {
    this.data = this.data.set('stepStatus', e.target.value);
  }

  onChangeStepDescription = (e) => {
    this.data = this.data.set('stepDescription', e.target.value);
  }

  onChangeStepAssignee = (e) => {
    this.data. = this.data.set('stepAssignee', e.target.value);
  }
  onClickShowEditStep = (step) => {
    this.data = this.data
      .set('editStepVisible', true)
      .set('editStepId', step.id.toString())
      .set('stepStatus', step.status)
      .set('stepDescription', step.description)
      .set('stepAssignee', step.assignee);
  }

  onClickEditStep = (idea) => {
  EditStepApi(this.data.get('stepDescription'), this.data.get('stepStatus'), this.data.get('stepAssignee'), this.data.get('editStepId')).then(
      (result) => {
        this.data = this.data.updateIn(['books', this.data.get('bookSelected').toString(), 'ideas', this.data.get('ideaSelected'), 'steps', this.data.get('editStepId')], s => s
               .set('description', this.data.get('stepDescription'))
               .set('status', this.data.get('stepStatus'))
               .set('assignee', this.data.get('stepAssignee')
              )
              .set('editStepVisible', false);
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
  }//onClickEditStep

  onClickAddStep = (desc, status) => {
          let title = this.data.get('stepDescription');
          let statusB = this.data.get('stepStatus');
          let assignee = this.data.get('stepAssignee');
      AddStepApi(this.data.get('stepDescription'), this.data.get('stepStatus'), this.data.get('stepAssignee'), this.data.get('ideaSelected')).then(
      (result) => {
        let books = this.data.get('books').toJS();
        if(books[this.data.get('bookSelected')].ideas[this.data.get('ideaSelected')].steps === undefined){
        this.data = this.data
          .updateIn(['books', this.data.get('bookSelected').toString(), 'ideas', this.data.get('ideaSelected')], s => s
            .merge(
                {'steps':
                  {[result]:
                  {
                    id: result,
                    description: title,
                    status: statusB,
                    assignee: assignee,
                  }
                  }
                }
              )
          );
        }else{
        this.data = this.data
          //ето го проблема, i e undefined, защото ideas още не съществува
          .updateIn(['books', this.data.get('bookSelected'), 'ideas', this.data.get('ideaSelected'), 'steps'], i => i
            .merge(
                {[result]:{
                  id: result,
                  description: title,
                  status: statusB,
                  assignee: assignee,
                }}
              )
          );
        }
      }
        ,(error) => {
        // When an error occurs, we want to clear
        // the "loading" state and set the "error"
        // state.
        this.data = this.data
          .set('loading', null)
          .set('error', error);
      }
    );
  }


  onClickDeleteStep = (id) => {
  DeleteIdea(id).then(
      (result) => {
       this.data = this.data.deleteIn(['books', this.data.get('bookSelected'), 'ideas', this.data.get('ideaSelected'), 'steps', id.toString()])
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
  }//onClickDeleteStep

	render(){
  		return(
			<section>
      {this.data.get('booksVisible') !== false ? 
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
          :null}

      {this.data.get('ideasVisible') !== false ?   
        <Ideas
          ideasVisible = {this.data.get('ideasVisible')}
          editIdeaVisible = {this.data.get('editIdeaVisible')} 
          ideaSelected = {this.data.get('ideaSelected')} 
          onClickCloseIdeas = {this.onClickCloseIdeas}
          onClickAddIdea = {this.onClickAddIdea}
          onClickShowAddIdea = {this.onClickShowAddIdea}
          onClickEditIdea = {this.onClickEditIdea}
          onClickIdea = {this.onClickIdea}
          bookSelected = {this.bookSelected}
          onClickShowEditIdea = {this.onClickShowEditIdea}
          onClickDeleteIdea = {this.onClickDeleteIdea}
          onChangeIdeaStatus = {this.onChangeIdeaStatus}
          onChangeIdeaTitle = {this.onChangeIdeaTitle} 
           {...this.data.toJS()}
        />
          : null}
      {this.data.get('stepsVisible') !== false ?
        <Steps
          stepsVisible = {this.data.get('stepsVisible')}
          books = {this.data.get('books')}
          bookSelected = {this.data.get('bookSelected')}
          ideaSelected = {this.data.get('ideaSelected')}
          stepSelected = {this.data.get('stepSelected')}
          onChangeStepStatus = {this.onChangeStepStatus}
          onChangeStepDescription = {this.onChangeStepDescription}
          stepStatus = {this.data.get('stepStatus')}
          stepDescription = {this.data.get('stepDescription')}
          addStepVisible = {this.data.get('addStepVisible')}
          onClickShowEditStep = {this.onClickShowEditStep}
          onClickEditStep = {this.onClickEditStep}
          onClickShowAddStep = {this.onClickShowAddStep}
          onClickAddStep = {this.onClickAddStep}
          onClickDeleteStep = {this.onClickDeleteStep}
          editStepId = {this.editStepId}
          onClickCloseSteps = {this.onClickCloseSteps}
          onChangeStepAssignee = {this.onChangeStepAssignee}
          {...this.data.toJS()}
        />
          : null}
			</section>
		);
	}

}//Container

export default Container;