class Command {
  constructor (id) {
    this.id = id;
  }
  execute () {
    throw new Error('You have to implement the method execute!');
  }
  getId () {
    return this.id;
  }
}
module.exports = Command;
