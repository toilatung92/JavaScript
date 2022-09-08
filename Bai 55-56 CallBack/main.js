/*
Call back : Là hàm (function) được truyền qua đối số khi gọi hàm khác 
1 : là hàm 
2 : Đươc truyền qua đối số 

*/
function myfunction(a) {
    if (typeof a === 'function');
    a ('Hello')
}
function myCallback(Value) {
    console.log('Value :',Value)
}
myfunction(myCallback)



// Phần 2 

Array.prototype.map2 = function(callBack){
    var arrayLength = this.length;
    for (var i = 0; i < arrayLength; ++i) {
        var result = callBack(this[i], i)
        console.log('result:', result);
    }
}


var lop10a = [
    'Tung',
    'Nam',
    'Lan',
    'Dat09'
]

 var htmls = lop10a.map2(function(lop, index){
    return`<h2>${lop}</h2>`
});

//  var htmls = lop10a.map2(function(lop){
//     return`<h2>${lop}</h2>`
// });
// console.log(htmls.join(''));
