Array.prototype.filter2 = function(callback){
    var output = []
    for (var index in this)
    if ( this.hasOwnProperty(index  )) {
         var result = callback(this[index],index)
         if(result) {
            output.push (this[index])
         }
    }
}


var user =[
    {
        name: 'Tung',
        id : 1
    },
    {
        name: 'Tuan',
        id : 2
    },
    {
        name: 'Nam',
        id : 3
    }

    
]

var filteruser = user.filter2(function(user, index, Array){
    return user.id > 1;
})
console.log(filteruser)