class Course {
  public id: string;
  public name: string;
  public  price: number;

  constructor(id: string, name: string, price: number) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

  showCourseInfo(): void {
    console.log(`${this.id} - ${this.name} - ${this.price} `)
  }
}

class CourseMobile extends Course {
  author: string;
  constructor(id: string, name: string, price: number, author: string) {
    super(id, name, price);
    this.author = author;
  }

  showCourseInfo() {
    super.showCourseInfo();
    console.log(this.author);
  }
}

var courseObj = new Course("C012", "Programming", 23);
console.log(courseObj.price);
//courseObj.showCourseInfo();

//var courseMobileObj = new CourseMobile ("C012", "Programming", 23, "Trieu Nguyen") ;
//courseMobileObj.showCourseInfo();
