class University {
    // name: string;
    // dept: string;
    constructor(public name: string, public dept: string) {
        // this.name = name;
        // this.dept = dept;
    }
    graduation(year: number) {
        console.log(`Graduating ${this.dept} ${year} students`);
    }
}

let miu: University = new University("MIU", "MSD");
miu.graduation(2021);