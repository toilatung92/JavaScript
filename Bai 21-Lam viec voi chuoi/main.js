// Keyword : Javascrip string methods //
var myString = 'Đây là đâu tôi là ai ? Ai là tôi ôi zồi ôi!!!';
// 1-Length (Kiểm tra độ dài chuỗi)
console.log(myString.length)
// 2-Find index ( Tìm vị trí của 1 ký tự trong chuỗi)
console.log(myString.indexOf('là',7))
//3- Cut string ( cắt chuỗi)//
console.log(myString.slice(6 , 10))
//4 - Replace (ghi đè)//
console.log(myString.replace('Đây là đâu','Đây là đây'))
console.log(myString.replace(/ôi/g,'??'))
//5- Convert to upper  case ( Tất cả thành chữ in hoa)
console.log(myString.toUpperCase())
//6- Convert to lower case (Tat ca thnah chu thuong)
console.log(myString.toLowerCase())
//7 - Trim( Loại bỏ khoảng trắng 2 đầu)//
console.log(myString.trim())
//8 -Split ( Cắt 1 chuỗi thành array)//
var fullName = 'Trinh , Thanh , Tung';
console.log(fullName.split(', '));
//9-Get a character by index// ( Lấy ký tự từ 1 index cho trước)
console.log(myString.charAt(2))
