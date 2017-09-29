// Reset Parametters

function showInfomation(name :string, ...course: string[]) {
  return name + " stydy " + course.join(", ");
}

var debugInfo = showInfomation("Triều Nguyễn", "AngularJs", "Es6", "Jquery","ReactJs");
console.log(debugInfo) ;
