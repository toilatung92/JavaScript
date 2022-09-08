Array.prototype.forEach2 = function(callback) {
    for (var index in this ) {
        console.log ('index :' , index)
    }
}


var menu = [
    'Com',
    'Pho',
    'Chao',
    'Bun'
];
menu.forEach2(function(Mon, index , array){
    console.log(Mon , index , array);
})