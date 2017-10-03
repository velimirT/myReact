import $ from 'jquery';

export function AddStepApi(desc, status, ideaid) {
  return new Promise((resolve, reject) => {
	  $.post('http://riderz.eu/func.php', {'act':'addStepReact', 'description':desc, 'status':status, 'ideaid':ideaid}).done(function(data){
		resolve(JSON.parse(data));
	  }).fail(function(data){
		reject('Err: '+data.statusText+' #'+data.status);
	  });
  });
}
