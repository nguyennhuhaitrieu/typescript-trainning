// Reset Parametters
function showInfomation(name, ...course) {
    return name + " stydy " + course.join(", ");
}
var debugInfo = showInfomation("Triều Nguyễn", "AngularJs", "Es6", "Jquery", "ReactJs");
console.log(debugInfo);
