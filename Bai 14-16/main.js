var a =2;
var b =3;
var isSuccess = a <= b;
console.log (isSuccess)

// câu lệnh điều kiện if//

if (isSuccess) {
    console.log('dung')
} else {
    console.log('Sai')
}
/* 6 gía  trị sang boolean thành false
 0
 false
 NaN
 "" hoặc ''
 null
 undefined */

 // Toán tử logical//
 var c = 1;
 var d = 2;
 var e = 3;
// Toán tử And-$$ đòi hỏi đúng tất cả các vế mới in giá trị//
 if (c >0 && d > c) {   
    console.log('Đúng');
 }
// Or-|| chỉ cần 1 trong các vế đúng 
 if(a > c|| d < c|| e < 0) {
    console.log('dung')
 }
 // !-Not phủ định mọi giá trị
 if (!(10 < 1)) {
    console.log('dieu kien dung')
 }