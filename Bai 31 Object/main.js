var Cannang = 'weight'

var myInfo = {
    Name :'Thanh Tung',
    Age :18,
    address:'Ninh Binh',
    [Cannang]:'666kg',
    getName: function(){
        return this.address;
    }
}
myInfo.email = 'Thanhtung@gmail.com';

delete myInfo.Name;
console.log(myInfo)
console.log(myInfo.Age) 
console.log(myInfo.getName());