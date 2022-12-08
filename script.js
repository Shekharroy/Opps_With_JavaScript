// Constructor function
// We use function expression to create function constructor;

let Person = function(name, gender, birthYear){
    this.name = name;
    this.gender = gender;
    this.birthYear = birthYear;
    this.calcAge = function(){
        let age = new Date().getFullYear() - this.birthYear;
        console.log(age);
    }
}

let chandra = new Person('Chandra', 'Male', 1995);
console.log(chandra);
chandra.calcAge();

let Shyam = new Person('Shyam', 'Male', 1990);
console.log(Shyam);
Shyam.calcAge();

let Amar = new Person('Amar', 'Male', 1989);
console.log(Amar);
Amar.calcAge();


