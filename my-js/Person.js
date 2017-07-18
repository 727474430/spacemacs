class Person{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    say() {
        return `My Name Is ${this.name}, I am Old ${this.age}`;
    }
}

export default Person;
