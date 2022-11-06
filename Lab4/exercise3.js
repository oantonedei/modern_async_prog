//Using Strategy Design Pattern

class Strategy {
  setStrategy(logger) {
    this.logger = logger;
  }
  logging(message) {
    return this.logger.logging(message);
  }
}

class Info {
  logging(message) {
    return console.info(message);
  }
}
class Warn {
  logging(message) {
    return console.warn(message);
  }
}
class Error {
  logging(message) {
    return console.error(message);
  }
}
class Table {
  logging(message) {
    return console.table(message);
  }
}

const strategy = new Strategy();

strategy.setStrategy(new Info());
strategy.logging("info....");

strategy.setStrategy(new Warn());
strategy.logging("warn....");

strategy.setStrategy(new Error());
strategy.logging("error....");

strategy.setStrategy(new Table());
strategy.logging(["table", "table"]);
