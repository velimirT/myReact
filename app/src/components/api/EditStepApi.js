import $ from 'jquery';

export function EditStepApi(description, status, assignee, id) {
  return new Promise((resolve, reject) => {
	  $.post('http://riderz.eu/func.php', {'act':'editStepReact', 'description':description, 'status':status, 'assignee':assignee, 'id':id}).done(function(data){
		resolve(JSON.parse(data));
	  }).fail(function(data){
		reject('Err: '+data.statusText+' #'+data.status);
	  }); 
  });
}
