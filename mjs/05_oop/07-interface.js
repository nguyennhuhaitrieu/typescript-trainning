class Machine {
    maytinh(x, y) {
        return x + y;
    }
}
class Superman extends Machine {
    constructor(name) {
        super();
        this.name = name;
    }
    eat() {
        console.log("eat");
    }
    sleep() {
        console.log("sleep");
    }
    fly() {
        console.log("fly");
    }
}
let join = new Superman("John");
join.eat();
join.sleep();
join.fly();
console.log(join.maytinh(5, 10));
