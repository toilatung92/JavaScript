var languages = [
    'Javarscrips',
    'PhP',
    'Ruby'

]
for (var value of languages) {
    console.log(value)
}
var fullName = 'Trinh Thanh Tung';

for (var value1 of fullName) {
    console.log(value1)
}

var myInfo = {
    name : 'Thanh Tung',
    age : 18
}
for (var value2 of Object.values(myInfo)) {
    console.log(value2)
}