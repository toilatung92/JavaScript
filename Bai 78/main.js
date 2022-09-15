var aEl = document.links;

for(var i =0 ; i < aEl.length; i++){
    aEl[i].onclick = function(e){
        console.log(e.target.href)
        if (!e.target.href.startsWith('https://www.google.com/'))
        e.preventDefault();

    }
}

var ulE = document.querySelector('ul');
ulE.onmousedown = function(e) {
    e.preventDefault();
}
ulE.onclick = 
    function(e){
        console.log(e.target);
    }