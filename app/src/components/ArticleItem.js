import React, { Component } from 'react';

export default({
	article,
	onClickToggle,
	onClickRemove,
}) => (
	<li>
		<a href = "#" onClick = { onClickToggle.bind(null, article.id) }> {article.title} </a>
		<a href = "#" onClick = { onClickRemove.bind(null, article.id) }> X </a>
		<p style = {{ display: article.display }}>
			{article.summary}
		</p>
	</li>
);
