var zetta = require('zetta');
var j5 = require('./index');
var Camera = require('zetta-jsmpeg-camera');
var dog = require('./dog_simulator');
var app = require('./app');
zetta()
  .name('bark-bark')
  .link('http://hello-zetta.herokuapp.com/')
  .use(j5)
  .use(dog)
  .use(app)
  .listen(1337);