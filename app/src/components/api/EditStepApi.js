import $ from 'jquery';

export function EditStepApi(description, status, id) {
  return new Promise((resolve, reject) => {
	  $.post('http://riderz.eu/func.php', {'act':'editStepReact', 'description':description, 'status':status, 'id':id}).done(function(data){
		resolve(JSON.parse(data));
	  }).fail(function(data){
		reject('Err: '+data.statusText+' #'+data.status);
	  }); 
  });
}
