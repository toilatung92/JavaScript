
// key word Javascript aray methods//
// 1 To String (Chuyển dữ liệu sang string)
var languages = [
    'Javascript',
    'PHP',
    'Ruby',
]
console.log(languages.toString());
console.log(languages.join(', ')); // Join biến array thành 1 chuỗi //.
console.log(languages.pop()); // Pop xóa element cuối mảng và trả phần tử đã xóa //
console.log(languages.push('Dart','java'));//Push thêm 1 hoặc nhiều phần tử vào cuối mảng và trả vê độ dài mới của mảng//
console.log(languages.shift()); // Shift xóa phần tử đầu mảng và trả về phần tử đã xóa///
console.log(languages.unshift('Haha', 'java'));// Unshift thêm 1 hoặc nhiều phần tử vào đầu mảng và trả về dồ dài mới của mảng//
console.log(languages.splice(1,0,'Hehe'));// Splice xóa hoặc chèn 1 elenment bất kì vào chuỗi //

var a =[ 
    'a',
    'b',
    'c',
] 
console.log(languages.concat(a)); // Concat có thể nối đc Array//
console.log(a.slice(0,1));//Slice cut 1 vài element của mảng//