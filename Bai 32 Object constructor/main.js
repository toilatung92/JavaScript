

function User(Hoten,Diachi,Tuoi) {
    this.Hoten = Hoten;
    this.Diachi = Diachi;
    this.Tuoi = Tuoi;
    this.getName = function(){
        return `${this.Hoten}`;
    }
}
var author = new User ('Thanh Tung','NinhBinh',18)
var user1 = new User ('Messi','Argentina',35)
var user = new User ('Mbappe','France', 30)
console.log(user);
console.log(author);
console.log(user1);
console.log(user.getName());
console.log(author.getName());
console.log(user1.getName());

