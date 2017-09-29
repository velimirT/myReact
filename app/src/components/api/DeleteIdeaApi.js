import $ from 'jquery';

export function DeleteIdea(id) {
  return new Promise((resolve, reject) => {
	  $.post('http://riderz.eu/func.php', {'act':'deleteIdeaReact', 'id':id}).done(function(data){
		resolve("ok");
	  }).fail(function(data){
		reject('Err: '+data.statusText+' #'+data.status);
	  });
  });
}
