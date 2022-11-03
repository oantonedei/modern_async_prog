var Person = /** @class */ (function () {
    function Person(id, firstname, lastname) {
        if (firstname === void 0) { firstname = ""; }
        if (lastname === void 0) { lastname = ""; }
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
    }
    Person.prototype.setName = function (name) {
        this.firstname = name.split(" ")[0];
        this.lastname = name.split(" ")[1];
    };
    Person.prototype.getFirstname = function () {
        return this.firstname.toUpperCase();
    };
    Person.prototype.getLastname = function () {
        return this.lastname;
    };
    return Person;
}());
var person = new Person(1);
person.setName('Jason Wonimidei');
console.log(person.getFirstname() + " " + person.getLastname());
