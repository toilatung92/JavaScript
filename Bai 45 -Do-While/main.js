var i = 0;
var isSuccess = false;

do {
    i++;
    console.log('Thử lần ' + i);
    if (false) {
        isSuccess = true;
    }
} while (!isSuccess && i<5);