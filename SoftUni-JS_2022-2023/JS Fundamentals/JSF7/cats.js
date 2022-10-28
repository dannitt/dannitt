function cats(arr) {
    class Cat {
        constructor(name, age) {
            this.name = name
            this.age = age
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`)
        }

    }
    let cats = []
    for (let el of arr) {
        let [name, age] = el.split(" ");
        let myCat = new Cat(name, age)
        cats.push(myCat)
    }
    for (let m of cats){
        m.meow()
    }

}
cats(['Mellow 2', 'Tom 5'])