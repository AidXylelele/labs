const fs = require('fs');
import { IConfiguration } from './lab1.types';
import { MathOperations } from './math.utils';

class NonInteractiveApp extends MathOperations {
  constructor(private FILE_NAME: string) {
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
  start = async () => {
    this.setValues();
    this.calculate();
  };
}

const app = new NonInteractiveApp('values.txt');
app.start()
