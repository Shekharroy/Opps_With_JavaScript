// Prototype and Inheritence;
// Inheritence is when one object is based on another object i.e. when one object gets access to the properties and methods 
//of another object;
// Q: How we implement Inheritence using prototype;
// In javaScript using inheritence using prototype;
//Q: What is protype?
//Ans: - 
// 1. Each and every javaScript object has a protype properties.
// 2. Inheritence in javaScript is achieved using this prototype properties;
// 3. When we attach a property or a method to the protype, prototype of that object, 
//those properties and methods can be inherited by the instantiated object


let PersonOfProt = function(name, gender, birthYear){
    this.name = name;
    this.gender = gender;
    this.birthYear = birthYear;
}

PersonOfProt.prototype.calculateAge = function(){
    let age = new Date().getFullYear() - this.birthYear;
    console.log("Aga of "+this.name+" == "+age);
};

PersonOfProt.prototype.city = 'Delhi NCR';

let chandraRef = new PersonOfProt('Chandra', 'Male', 1995);
chandraRef.calculateAge();
console.log(chandraRef);


let shyamRef = new PersonOfProt('Shyam', 'Male', 1990);
shyamRef.calculateAge();
console.log(shyamRef);

let shivaniRef = new PersonOfProt('Shivani', 'female', 1995);
shivaniRef.calculateAge();
console.log(shivaniRef);
