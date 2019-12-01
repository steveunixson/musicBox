import Sound from './Sound.class';
import Controls from './Gamepad.class';
import Config from './Config.class';

export default class Main extends Config {
  constructor() {
    super();
    this.sound = new Sound();
    this.control = new Controls();
  }

  sampler(axis) {
    switch (axis) {
      case 0:
        console.log(`PLAYING: ${this.samplesList[0]}`);
        this.sound.play(this.samplesList[0]);
        break;
      case 1:
        console.log(`PLAYING: ${this.samplesList[1]}`);
        this.sound.play(this.samplesList[1]);
        break;
      case 2:
        console.log(`PLAYING: ${this.samplesList[2]}`);
        this.sound.play(this.samplesList[2]);
        break;
      case 3:
        console.log(`PLAYING: ${this.samplesList[3]}`);
        this.sound.play(this.samplesList[3]);
        break;
      case 4:
        console.log(`PLAYING: ${this.samplesList[4]}`);
        this.sound.play(this.samplesList[4]);
        break;
      case 7:
        console.log(`PLAYING: ${this.samplesList[5]}`);
        this.sound.play(this.samplesList[5]);
        break;
      case 8:
        console.log(`PLAYING: ${this.samplesList[6]}`);
        this.sound.play(this.samplesList[6]);
        break;
      case 9:
        console.log(`PLAYING: ${this.samplesList[8]}`);
        this.sound.play(this.samplesList[8]);
        break;
      default:
        console.log('STOP YOU VIOLATED THE LAW');
        this.sound.stop();
    }
  }

  init() {
    this.control.trigger('up', (id, axis, value) => {
      this.sampler(axis);
    });
  }
}
