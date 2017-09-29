/*let myObj = {size: 10, label: "Size 10 Object"};
console.log(myObj);
*/

interface CourseInterface {
  name: string;
  time: string;
  free?: false;
}

let objTwo: CourseInterface;
objTwo = {
  name: "Es6",
  time: "5h",
};

let objThree: CourseInterface;
objThree = {
  name: "Es6",
  time: "5h",
  free: false,
}

console.log(objTwo);
console.log(objThree);
