const EventEmitter = require('events').EventEmitter;
const mediator = new EventEmitter();
const {ExampleCommand} = require('../commands');
const command = new ExampleCommand();

mediator.on('loggedIn', function (msg) {
  console.log('Mediator loggedIn: ', msg);
  command.execute(msg);
});

exports.exampleMediator = mediator;
