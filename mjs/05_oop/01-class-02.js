// enum TaskStaste {
//   Created = 100,
//   Active,
//   InActive,
//   Process,
//   Finish
// }
// interface TaskInterface {
//   id: number;
//   name: string;
//   state?: TaskStaste;
// }
//
// class TaskService {
//   tasks: TaskInterface[];
//
//   constructor(tasks: TaskInterface[]) {
//     this.tasks = tasks;
//   }
//
//   getItems() {
//     return this.tasks;
//   }
// }
//
// let task1: TaskInterface = { id: 1, name: "Coding" };
// let task2: TaskInterface = { id: 3, name: "Coding Angular" };
//
// let tasks: TaskInterface[] = [
//   task1,
//   task2,
//   {  id: 2, name: "Studing Es6", state: TaskStaste.Finish }
// ];
//
// let taskServiceObj = new TaskService(tasks);
// console.log(taskServiceObj.getItems());
