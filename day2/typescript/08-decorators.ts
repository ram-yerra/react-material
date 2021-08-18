//https://www.typescriptlang.org/docs/handbook/decorators.html
function f() {
  console.log("f(): evaluated");
  return function (
    target:any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("f(): called");
  };
}

function g() {
  console.log("g(): evaluated");
  return function (
    target:any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("g(): called");
  };
}

class C {
  @f()
  @g()
  method() {}
}

function sealed(target:any) {
	console.log(target);
  // do something with 'target' ...
}

@sealed  
class Person {  
    msg: string;  
    constructor(message: string) {  
        this.msg = message;  
    }  
    show() {  
        return "Hello, " + this.msg;  
    }  
} 