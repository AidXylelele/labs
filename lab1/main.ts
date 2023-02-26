import { interactiveApp } from './src/interactive';
import { nonInteractiveApp } from './src/non-interactive';

const FILENAME_POSITION = 3;

(async () => {
  process.argv.length === FILENAME_POSITION
    ? nonInteractiveApp.start(process.argv[2])
    : await interactiveApp.start();
  return process.exit();
})();
