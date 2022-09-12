Array.prototype.some2 = function(callback){
    var output = false;
    for (var index in this) {
        if (this.hasOwnProperty(index)){
            if(callback(this[index], index, this)){
                output = true;
                break
            };
            
        }
    }
    return output;
}


var courses = [
    {
        name: 'java',
        coid: 50,
        isFinish: true
    },
    {
        name: 'PHP',
        coid: 500,
        isFinish: false
    },
    {
        name: 'Ruby',
        coid: 5052,
        isFinish: false
    },
    {
        name: 'AAA',
        coid: 50,
        isFinish: false
    },
]
var resulf = courses.some2(function(courses, index, Array){
    return courses.isFinish;
})
console.log(resulf)
