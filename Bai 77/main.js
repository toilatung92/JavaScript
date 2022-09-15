var inputE = document.querySelector('input[type="text"]')

inputE.onchange = function(e){
    console.log(e.target.value)
}
inputE.oninput = function(e){
    console.log(e.target.value)
}
inputE.onkeyup = function(e){
    console.log(e.which)

    switch(e.which) {
        case 27:
        console.log('Thoat');
        break;
        case 13:
        console.log('Bat Dau Chat');
        break;
    }

}

var inputE1 = document.querySelector('input[type="checkbox"]')
inputE1.onchange = function(e){
    console.log(e.target.checked)
}

