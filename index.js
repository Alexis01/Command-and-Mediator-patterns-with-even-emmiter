// event client
const eventMediator = require('./mediators/example.mediator');

eventMediator.exampleMediator.emit('loggedIn', 'A User logged in');
