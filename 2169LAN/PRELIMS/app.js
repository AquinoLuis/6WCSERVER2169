var myLogModule = require('./PRELIMS/utility/log.js');

myLogModule.warning('Warning node not configured..');
myLogModule.error('Error: Node encountered an error..');
myLogModule.info('Node running...');

var msg = require('./PRELIMS/utility/Message.js');
console.log(msg);

var person = require('./utility/data.js');
console.log(person.firstName + ' ' + person.lastName);

var msg = require('./PRELIMS/utility/log.js');
msg('Hello Luis');
