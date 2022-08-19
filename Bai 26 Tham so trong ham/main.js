// Truyền tham số //
function writeLog(message ,message2) {
    console.log(message)
    console.log(message2)
}
writeLog('Say hello', 'Say goodbye'); //message là tham số //
function abc () {
    console.log(arguments)
}
abc('Log1','Log2','Log3')


//Vòng for of//
function abc() {
    var myString = '';
    for (var bbc of arguments){
        console.log(bbc)
        myString += `${bbc}_ `
    }
    console.log(myString)
}