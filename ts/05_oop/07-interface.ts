interface People {
	name: string;
	eat(): void;
	sleep(): void;
}

interface Bird {
	fly(): void ;
}

class Machine {
	maytinh(x: number,y :number): number {
		return x + y; 
	}
}

class Superman extends Machine implements People, Bird {
	name: string;

	constructor(name: string) {
		super();
		this.name = name;
	}

	eat(): void {
		console.log ("eat");
	}

	sleep(): void {
		console.log ("sleep");
	}

	fly(): void {
		console.log ("fly");
	}
}

let join: Superman = new Superman("John");
join.eat();
join.sleep() ;
join.fly();
console.log(join.maytinh(5,10));