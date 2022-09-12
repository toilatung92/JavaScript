Array.prototype.every2 = function(callback){
    var output = true;
    for (var index in this) {
        if (this.hasOwnProperty(index)){
            var resulf = callback(this[index], index, this);
            if(!resulf){
                output = false
                break; 
            }
            };
            
        }
    
    return output;
}    



var courses = [
    {
        name: 'java',
        coid: 50,
        isFinish: false
    },
    {
        name: 'PHP',
        coid: 500,
        isFinish: true
    },
    {
        name: 'Ruby',
        coid: 5052,
        isFinish: true
    },
    {
        name: 'AAA',
        coid: 50,
        isFinish: true
    },
]
var resulf = courses.every2(function(courses, index, Array){
    return courses.isFinish;
})
console.log(resulf)
