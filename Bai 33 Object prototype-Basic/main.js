

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
User.prototype.className = 'PSG';
User.prototype.getClassname = function() {
    return this.className;
}
 console.log(user.className)

