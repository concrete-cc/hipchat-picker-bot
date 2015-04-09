var ack = require('ac-koa').require('hipchat');
var pkg = require('./package.json');
var app = ack(pkg);

var addon = app.addon()
  .hipchat()
  .allowRoom(true)
  .scopes('send_notification');

if (process.env.DEV_KEY) {
  addon.key(process.env.DEV_KEY);
}

addon.webhook('room_message', /^\/hello$/, function *() {
	yield this.roomClient.sendNotification('Sup, ' + this.sender.name + '!');
});

addon.webhook('room_message', /^\/pick\s(@\w+\s)+/, function *() {
	var people = this.content.split('/pick')[1];
	people = people.split(' @');
	people.shift();
//	yield this.roomClient.sendNotification('Picking from: ' + people.join(', '));

	var selection = ~~(people.length * Math.random());
	yield this.roomClient.sendNotification('I dunno, I guess I\'ll pick @' + people[selection], {notify: true});
});

app.listen();
