//Using Observer Design Pattern

class Subject {
  constructor() {
    this.events = {};
  }
  on(event, fn) {
    if (!this.events[event]) {
      this.events[event] = [];
      this.events[event].push(fn);
    } else {
      this.events[event].push(fn);
    }
  }
  emit(event, message) {
    for (const key in this.events) {
      if (key === event) {
        this.events[key].forEach((fn) => {
          fn(message);
        });
      }
    }
  }
}

const subject = new Subject();
subject.on("eat", console.log); // register an observer
subject.on("study", console.log); // register an observer

function foo(msg) {
  console.log("foo: " + msg);
}
subject.on("eat", foo);
subject.on("study", foo);

subject.emit("eat", "Corn");
//output for Line above: subject.emit('eat', 'Corn');
// Corn
// foo: Corn
subject.emit("study", "cs445");
//output for Line above: subject.emit('study', 'cs445');
// cs445
// foo: cs445
