class Person {
    id: number;
    firstname: string;
    lastname: string;

    constructor(id: number, firstname: string = "", lastname: string = "") {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
    }

    setName(name: string): void {
        this.firstname = name.split(" ")[0];
        this.lastname = name.split(" ")[1];
    }

    getFirstname(): string {
        return this.firstname.toUpperCase();
    }

    getLastname(): string {
        return this.lastname;
    }
}

let person = new Person(1);
person.setName('Jason Wonimidei');
console.log(person.getFirstname() + " " + person.getLastname());

