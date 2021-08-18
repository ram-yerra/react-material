class Animal {
    private name: string;
    constructor(theName: string) {
      this.name = theName;
    }
  }
  
  class Rhino extends Animal {
    constructor() {
      super("Rhino");
    }
  }
  
  class Employee {
    private name: string;
    constructor(theName: string) {
      this.name = theName;
    }
  }
  
  let animal = new Animal("Goat");
  let rhino = new Rhino();
  let employee = new Employee("Bob");
  
  animal = rhino;
  //animal = employee;
  /*Type 'Employee' is not assignable to type 'Animal'.
    Types have separate declarations of a private property 'name'.*/
