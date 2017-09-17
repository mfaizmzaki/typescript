var Calculator = /** @class */ (function () {
    function Calculator(x, y) {
        this.x = x;
        this.y = y;
        this.model = 'Casio';
    } //explicitly stating public is a shorthand so kita tkyah guna this.x = x ...
    Calculator.prototype.addNumber = function () {
        console.log("Model " + this.model + " ");
        console.log(this.x + this.y);
    };
    Calculator.prototype.divideNumber = function () {
        console.log(this.x / this.y);
    };
    Calculator.prototype.multiplyNumber = function () {
        console.log(this.x * this.y);
    };
    Calculator.prototype.minusNumber = function () {
        console.log(this.x - this.y);
    };
    Calculator.prototype.changeModel = function (name) {
        this.model = name;
    };
    return Calculator;
}());
var calc = new Calculator(6, 2); //object declaration
calc.changeModel('Samsung');
calc.addNumber();
