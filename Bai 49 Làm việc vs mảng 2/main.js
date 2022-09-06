var courses = [
    {
        id : 1,
        name : 'Javarscrip',
        coin: 66
    },
    {
        id : 2,
        name : 'PHP',
        coin: 98
    },
    {
        id : 3,
        name : 'RUBY',
        coin: 45
    },
    {
        id : 4,
        name : 'ReactJS',
        coin: 0
    },
    {
        id : 5,
        name : 'HTML',
        coin: 1200
    },
    {
        id : 6,
        name : 'HTML',
        coin: 87
    },
]
// forEach()
courses.forEach(function(course, index) {
    console.log( index ,course)
})

//every()  Tất cả điều kiện trong mảng phải thỏa mãn điều kiện gì đó 
var isFree = courses.every(function(course, index) {
    return course.coin === 0;
})
console.log(isFree)
// Some() Chỉ cần 1 phần tử trong mảng thỏa mãn điều kiện 

var isFree = courses.some(function(course, index) {
    return course.coin === 0;
})
console.log(isFree)

//Find() Tìm kiếm (Trả về 1 phần tử đầu tiên)

var course = courses.find(function(course, index) {
    return course.name === 'HTML';
})
console.log(course)

//Filter() Tìm kiếm (Trả về tất cả phàn tử thỏa mãn)

var course = courses.filter(function(course, index) {
    return course.name === 'HTML';
})
console.log(course)



