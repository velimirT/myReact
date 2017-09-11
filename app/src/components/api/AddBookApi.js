import $ from 'jquery';

export function AddBookApi(title, users) {
  return new Promise((resolve, reject) => {
	  $.post('http://riderz.eu/func.php', {'act':'addBookReact', 'title':title, 'users':users}).done(function(data){
		resolve(JSON.parse(data));
	  }).fail(function(data){
		reject('Err: '+data.statusText+' #'+data.status);
	  });
  });
}
