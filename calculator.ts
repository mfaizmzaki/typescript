class Calculator{

  private model = 'Casio';

  constructor(public x: number, public y: number){} //explicitly stating public is a shorthand so kita tkyah guna this.x = x ...

  addNumber(){
    console.log("Model " + this.model + " ");
    console.log(this.x + this.y);
  }

  divideNumber(){
    console.log(this.x / this.y);
  }

  multiplyNumber(){
    console.log(this.x * this.y);
  }

  minusNumber(){
    console.log(this.x - this.y);
  }

  changeModel(name: string){
    this.model = name;
  }
}

let calc = new Calculator(6,2); //object declaration
calc.changeModel('Samsung');
calc.addNumber();
