module.exports = function(server) {
	var j5led = server.where({type: 'led'});
  var dog = server.where({type: 'dog'});
  server.observe([j5led, dog], function(led, dog){
  	console.log('app started');
  	dog.on('bark', function(){
  		led.call('turn-on');
  	})
  });
}