const Command = require('./class');

class ExampleCommand extends Command {
  constructor () {
    super('ExampleCommand');
  }
  execute (payload) {
    console.log('Execute ExampleCommand: ', payload);
  }
};

module.exports = ExampleCommand;
