/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
function Calculator(firstNumber, secondNumber) {
  (this.num1 = firstNumber), (this.num2 = secondNumber);
  this.sum = function () {
    return this.num1 + this.num2;
  };
  this.subtraction = function () {
    return this.num1 - this.num2;
  };
  this.multiplication = function () {
    return this.num1 * this.num2;
  };
  this.division = function () {
    return this.num1 / this.num2;
  };
}

const calcObject = new Calculator(2, 5);

// console.log(calcObject.sum());
// console.log(calcObject.subtraction());
// console.log(calcObject.multiplication());
// console.log(calcObject.division());
