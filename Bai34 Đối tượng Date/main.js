//Đối tượng Date

var date = new Date();

var year = date.getFullYear();
var month = date.getMonth() + 1; // 0->11//
var day = date.getDate();

console.log(`${day}/${month}/${year}`);
console.log(day);
console.log(month);
console.log(year);