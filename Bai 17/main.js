// Kiểu dữ liệu trong Javascript//

//1 Dữ liệu nguyên thủy//

// -Number type (kiểu số )//
var a = 1 ;
var b = 856.34534;
// -String type (Kiểu chuỗi)/

var fullName = 'Thanh Tung Ne'

// - Boolean type
var isSuccesss = true;

// - Undefined type ( định nghĩa biến nhưng ko gán giá trị)

var age;
var name;
// Null

var isNull = null; // Ko có gì @@

// symbol

var id = Symbol('id');// unique

// 2 Kiểu dữ liệu phức tạp 

//-Funcition

var myFuncition = function() {
    alert('Thuê bao quý khách vừa gọi hiện không liên lạc được !!')
}
myFuncition();
//- Object types

var myObject = {
    Name : 'Tung',
    age : 18,
    adress: 'China'
}
var myArray = [
    'U',
    'La',
    'Troi',
    'HeHe'
];
console.log(myArray)
// Kiểm tra //
console.log(typeof myArray)