// Đầy đủ các tham số
function userInfo1(name, age) {
    return `Tôi tên la ${name}, và tôi năm nay ${age}`;
}
var showUserInfo = userInfo1("Triều Nguyễn", 28);
console.log(showUserInfo);
//Tham số mặc định
function userInfo2(name = "Huy Khánh", age = 69) {
    return `Tôi tên la ${name}, và tôi năm nay ${age}`;
}
var showUserInformation = userInfo2("Huy Hoàng", 5);
console.log(showUserInformation);
//Tham số khuyết
function userInfo3(name = "Huy Khánh", age) {
    if (age == null) {
        return `Tôi tên la ${name}`;
    }
    else {
        return `Tôi tên la ${name}, và tôi năm nay ${age}`;
    }
}
var showUserInfoNone = userInfo3("Huy Hoàng", 15);
console.log(showUserInfoNone);
