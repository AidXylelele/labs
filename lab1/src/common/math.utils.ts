import { IValues } from "./lab1.types";


export class MathOperations {
  values: IValues = {
    a: 0,
    b: 0,
    c: 0,
  };

  printEquation = ({ a, b, c }: IValues) => {
    const message = `Equation is: ${a}x^2 ${b >= 0 ? `+${b}` : b}x ${
      c >= 0 ? `+ ${c}` : c
    } = 0`;
    return console.log(message);
  };

  calculate = (): any => {
    this.printEquation(this.values);
    const { a, b, c } = this.values;
    const discriminant = Math.pow(b, 2) - 4 * a * c;
    if (discriminant > 0) {
      const x1 = (-1 * b + Math.sqrt(discriminant)) / (2 * a);
      const x2 = (-1 * b - Math.sqrt(discriminant)) / (2 * a);
      console.log(`x1: ${x1}, x2: ${x2}`);
    } else if (discriminant === 0) {
      console.log(`Found 1 root: x = ${(-1 * b) / (2 * a)}`);
    } else {
      console.log('There are 0 roots');
    }
  };
}
