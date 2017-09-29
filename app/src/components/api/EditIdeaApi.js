import $ from 'jquery';

export function EditIdeaApi(description, status, id) {
  return new Promise((resolve, reject) => {
	  $.post('http://riderz.eu/func.php', {'act':'editIdeaReact', 'description':description, 'status':status, 'id':id}).done(function(data){
		resolve(JSON.parse(data));
	  }).fail(function(data){
		reject('Err: '+data.statusText+' #'+data.status);
	  });
  });
}
