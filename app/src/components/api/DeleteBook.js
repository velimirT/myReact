import $ from 'jquery';

export function DeleteBook(id) {
  return new Promise((resolve, reject) => {
	  $.post('http://riderz.eu/func.php', {'act':'deleteBookReact', 'id':id}).done(function(data){
		resolve("ok");
	  }).fail(function(data){
		reject('Err: '+data.statusText+' #'+data.status);
	  });
  });
}
