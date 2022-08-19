//1 khi function trùng tên ?
function abc (){
    console.log('xin chao ')
}
function abc (){
    console.log('xin chao 2')
}
abc()
//Function định nghĩa sau sẽ ghi đè lên function định nghĩa trước //

// 2 Khai Báo biến trong hàm//
function showMaker() {
    var fullName = 'Thanh Tung';
    console.log(fullName);

}
showMaker()

// Hàm trong hàm

function showMaker1() {
    function showMaker2(){
        console.log('hello');
        
    }
    showMaker2();
}
showMaker1();