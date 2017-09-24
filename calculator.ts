export class Calculator{

  private _model = 'Casio'; //underscore as naming convention utk private property yg ada get/set method
  
  constructor(public x: number, public y: number){} //explicitly stating public is a shorthand so kita tkyah guna this.x = x ...

  addNumber(){
    console.log("Model " + this._model + " ");
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

  set model(name: string){  //set method utk typescript. sama juga kalau get.
    if (name.length < 3){
      throw new Error('Model name must be more than 3 characters');
    }
    this.model = name;
  }
}
