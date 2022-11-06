//Using Decorator Design Pattern

class User {
  constructor(name) {
    this.name = name;
  }
  logger() {
    console.log(`User: ${this.name}`);
  }
}
class DecoratedUser {
  constructor(user, street, city) {
    this.user = user;
    this.name = user.name;
    this.street = street;
    this.city = city;
  }
  logger() {
    console.log(
      `Decorated User: ${this.name}, lives in ${this.street}, ${this.city}.`
    );
  }
}

const user = new User("Kelly");

const decorated = new DecoratedUser(user, "Broadway", "New York");
decorated.logger();
