import $ from 'jquery';

export function GetBooks() {
  return new Promise((resolve, reject) => {
	  $.post('http://riderz.eu/func.php', {'act':'getBooksTest'}).done(function(data){
		resolve(JSON.parse(data));		  
	  }).fail(function(XMLHttpRequest, textStatus, errorMessage){
		reject('Err: '+textStatus+' state:'+XMLHttpRequest.readyState);
	  });
  });
}
