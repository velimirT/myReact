import $ from 'jquery';

export function AddIdeaApi(desc, status, bookid) {
  return new Promise((resolve, reject) => {
	  $.post('http://riderz.eu/func.php', {'act':'addIdeaReact', 'description':desc, 'status':status, 'bookid':bookid}).done(function(data){
		resolve(JSON.parse(data));
	  }).fail(function(data){
		reject('Err: '+data.statusText+' #'+data.status);
	  });
  });
}
