// Parent constructor function
function Animal(name) {
    this.name = name;
  }
  
  // Adding a method to the prototype of the parent
  Animal.prototype.sayHello = function() {
    console.log(`Hello, I'm ${this.name}`);
  };
  
  // Child constructor function that inherits from Animal
  function Dog(name, breed) {
    Animal.call(this, name); // Call the parent constructor
    this.breed = breed;
  }
  
  // Inherit the prototype from Animal
  Dog.prototype = Object.create(Animal.prototype);
  
  // Adding a method to the prototype of the child
  Dog.prototype.bark = function() {
    console.log(`${this.name} is barking!`);
  };
  
  const dog1 = new Dog('Buddy', 'Golden Retriever');
  dog1.sayHello(); // Calls the parent method
  dog1.bark(); // Calls the child method
  