import React, { Component } from 'react';
import ArticleList from 'ArticleList';
import AddArticle from 'AddArticle';

export default class Feature extends Component {
	render(){
		const {
			articles,
			title,
			summary,
		} = this.data.toJS();
		
		return(
			<section>
				<AddArticle 
					name = "Articles" 
					title = {title} 
					summary = {summary} 
					onChangeTitle = {onChangeTitle} 
					onChangeSummary = {onChangeSummary} 
					onClickAdd = {onClickAdd} 
				/>
				
				<ArticleList
					articles = { articles }
					onClickToggle = { this.onClickToggle }
					onClickRemove = { this.onClickRemove }
				/>
			</section>
		);
	}
}