
function User (email, name, age){ 
    this.name = name;
    this.email = email;
    this.age = age;
    this.login = function() {
            console.log(this.email, 'has logged in');
    }

}

var userOne = new User('fhfhfhfhfh@outlook.com','Rocky');
var userTwo = new User('rurururu@outlook.com', 'Rocky');

console.log(userOne);