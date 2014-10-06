var util = require('util');
var Device = require('zetta').Device;

var dogSimulator = module.exports = function() {
  Device.call(this);
};
util.inherits(dogSimulator, Device);

dogSimulator.prototype.init = function(config) {
	config
		.name('bruno-the-dog')
		.type('dog')
		.state('content')
		.when('sleeping', { allow: [] })
		.when('angry', { allow: ['feed', 'bark', 'quiet'] })
		.when('content', { allow: ['feed'] })
		.map('bark', this.bark)
		.map('quiet', this.quiet)
		.map('feed', this.feed, [{type: 'string', name: 'food'}])
}

dogSimulator.prototype.bark = function(cb) {

	cb();
}
dogSimulator.prototype.quiet = function(cb) {

	cb();
}

dogSimulator.prototype.feed = function(food, cb) {
	if(food == "treat") {
		this.state = "content";
	} else if(food == "milkshake") {
		this.state = "sleeping";
		this.call('quiet');
	} else if(food == "dog food") {
		this.state = 'angry';
		this.call('bark');
	}
	cb();
}