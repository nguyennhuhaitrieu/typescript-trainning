class Task {
  id: number;
  name: string;
  state: string;

  constructor(id: number, name: string, state:string) {
    this.id     = id;
    this.name   = name;
    this.state  = state;
  }

  showTaskInfo() {
    console.log(`${this.id} - ${this.name} - ${this.state}`);
  }
}

let creObject = new Task(69,"Trieu Nguyen", "Done");
console.log(creObject);
creObject.showTaskInfo();

