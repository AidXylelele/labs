import { MathOperations } from './common/math.utils';
const fs = require('fs');

export class NonInteractiveApp extends MathOperations {
  private FILE_NAME: string;
  constructor() {
    super();
  }
  getContent = () => {
    const fileContent: string = fs.readFileSync(this.FILE_NAME, 'utf-8');
    return fileContent
      .split('')
      .map((element) => Number(element))
      .filter((element) => !isNaN(element));
  };
  setValues = () => {
    const content = this.getContent();
    const keys = Object.keys(this.values);
    for (let i = 0; i < keys.length; i++) {
      const value = content[i];
      const field = keys[i];
      if (isNaN(value) || (field == 'a' && value == 0)) {
        return console.log('Error. Expected a valid real number. Fix file!');
      }
      this.values[field] = value;
    }
  };
  start = async (file: string) => {
    this.FILE_NAME = file;
    this.setValues();
    this.calculate();
  };
}

export const nonInteractiveApp = new NonInteractiveApp();
