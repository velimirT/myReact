import $ from 'jquery';

export function EditBookApi(title, users, id) {
  return new Promise((resolve, reject) => {
	  $.post('http://riderz.eu/func.php', {'act':'editBookReact', 'title':title, 'users':users, 'id':id}).done(function(data){
		resolve(JSON.parse(data));
	  }).fail(function(data){
		reject('Err: '+data.statusText+' #'+data.status);
	  });
  });
}
