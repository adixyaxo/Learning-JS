// Object-Oriented Programming in TypeScript
// main key differences in OOP in TypeScript are classes, interfaces, inheritance, and access modifiers.

class Chai {
  flavour:string;
  price:number;

  constructor(flavour:string, price:number) {
    this.flavour = flavour;
    this.price = price;
  }
}

const masalaChai = new Chai("Masala", 20);
masalaChai.flavour = "masala"; // OK

class ChaiWithAccessModifiers {
  public flavour:string
  private ingredients:string
  protected price:number
  constructor(flavour:string, price:number) {
    this.flavour = flavour
    this.price = price
    this.ingredients = "Tea leaves, milk, sugar, spices"
  }
}

class SpecialChai extends ChaiWithAccessModifiers {
  constructor(flavour:string, price:number) {
    super(flavour, price)
  }
  getPrice():number {
    return this.price // OK, price is protected
  }
  setPrice(price:number):void {
    this.price = price // OK, price is protected
  }
}

// # in classes

class Wallet {
  #balance:number
  constructor(balance:number) {
    this.#balance = balance
  }
}

const w = new Wallet(100)
// w.#balance // Error: Property '#balance' is not accessible outside class 'Wallet' because it has a private identifier.

// read only properties in classes

class ChaiWithReadOnly {
  readonly flavour:string
  constructor(flavour:string) {
    this.flavour = flavour
  }
}

const chai = new ChaiWithReadOnly("Masala")
// chai.flavour = "Ginger" // Error: Cannot assign to 'flavour' because it is a read-only property.

// static members in classes

class ChaiWithStatic {
  static readonly origin:string = "India"
  constructor() {
  }
}
console.log(ChaiWithStatic.origin) // OK

// abstract classes in TypeScript
// abstract class is a class that cannot be instantiated on its own and is meant to be extended by other classes. It can contain abstract methods, which are methods without an implementation that must be implemented by subclasses.
// they are used to define a common interface for a group of related classes, while allowing each subclass to provide its own implementation of the abstract methods.
abstract class ChaiAbstract {
  abstract makeChai():void
}

class myChai extends ChaiAbstract {
  makeChai(): void {
    console.log("Making chai")
  }
}