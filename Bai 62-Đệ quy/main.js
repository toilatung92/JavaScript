//Vi du ve Count Down (De quy)
function demNguoc(num) {
    if (num > 0){
        console.log(num);
        return demNguoc(num - 1)
    }
    return num
}
demNguoc(10)

// Vi Du ve Vong lap (De Quy)
function loop(start, end, callback) {
    if (start <= end) {
        callback(start)
        return loop(start+1, end, callback)
    }
}

 var array = ['AAA','BBB', 'CCC'];

 loop(0, array.length - 1, function(index){
    console.log(array[index]);
 });
 // Ví dụ về tính giai thừa 
 function giaiThua(num) {
    if (num > 0) {
        return num * giaiThua(num -1);
    }
    return 1;
 }
 console.log(giaiThua(5));