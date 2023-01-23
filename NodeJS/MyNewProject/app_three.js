class Person{
    constructor(name, phone, age){
        this.name = name;
        this.phone = phone;
        this.age = age;
    }

    toString(){
        return `${this.name}, ${this.age} y.o., phone: ${this.phone}, `
    }
}

module.exports = Person;