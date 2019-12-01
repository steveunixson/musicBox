import os from 'os';
import fs from 'fs';

export default class Config {
  constructor() {
    this.samples = `${os.homedir()}/musicBOX`;
    this.samplesList = [];
    this.checkSamplesDir();
    this.getAllFiles();
  }

  checkSamplesDir() {
    if (!fs.existsSync(this.samples)) {
      fs.mkdirSync(this.samples);
    }
  }

  getAllFiles() {
    fs.readdir(this.samples, (err, files) => {
      files.forEach((file) => {
        this.samplesList.push(`${this.samples}/${file}`);
        console.log(this.samplesList);
      });
    });
  }
}
