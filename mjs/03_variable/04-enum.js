var STATUS;
(function (STATUS) {
    STATUS[STATUS["creted"] = 100] = "creted";
    STATUS[STATUS["process"] = 200] = "process";
    STATUS[STATUS["finished"] = 500] = "finished";
})(STATUS || (STATUS = {}));
;
let todoStatus = STATUS.finished;
console.log(todoStatus);
