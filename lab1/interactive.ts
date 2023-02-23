import { createInterface } from 'readline';
import { IConfiguration } from './lab1.types';
import { MathOperations } from './math.utils';

class InteractiveApp extends MathOperations {
  constructor() {
    super();
  }
  private configuration: IConfiguration = {
    input: process.stdin,
    output: process.stdout,
    prompt: '> ',
  };

  private interface = createInterface(this.configuration);

  private input = (arg: string): Promise<void> =>
    new Promise((answer: () => void) => this.interface.question(arg, answer));

  setValues = async () => {
    for (const field in this.values) {
      while (true) {
        const value = Number(await this.input(`Enter ${field}: `));
        if (isNaN(value) || (field == 'a' && value == 0)) {
          console.log('Error. Expected a valid real number, got NaN instead');
          continue;
        }
        this.values[field] = value;
        break;
      }
    }
  };
  start = async () => {
    this.interface.prompt();
    await this.setValues();
    this.calculate();
    this.interface.close();
  };
}

const app = new InteractiveApp();
app.start();
