/*let course: string[] = ["es6","typescript"];
console.log(course);
*/

interface CourseList {
  [index: number]: string;
}

let course:CourseList =["es6","typescript","jquery"];
console.log(course);
