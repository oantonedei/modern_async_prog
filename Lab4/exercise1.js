//Using Factory Method Design Pattern

class Regular {
  constructor() {
    this.lumenRange = [50, 100];
    this.duration = "1 year";
  }
}
class EnergySaver {
  constructor(color) {
    this.lumenRange = [5, 40];
    this.duration = "10 years";
    this.color = color;
  }
}
class Factory {
  createBulb(type, color) {
    let bulb;
    if (type === "regular") {
      bulb = new Regular();
    } else if (type === "energy") {
      bulb = new EnergySaver(color);
    }
    return bulb;
  }
}

const bulbs = [];
const factory = new Factory();

bulbs.push(factory.createBulb("regular"));
bulbs.push(factory.createBulb("energy", "red"));

for (let i = 0, len = bulbs.length; i < len; i++) {
  console.log(bulbs[i]);
}
