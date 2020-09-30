import { browser} from 'protractor';
import * as fs from 'fs';

declare var Buffer, module: any;

export function takeScreenshot(filename: string) {
  return browser.takeScreenshot().then((data) => {
    const stream = fs.createWriteStream(filename);
    stream.write(new Buffer(data, 'base64'));
    stream.end();
  })
}