import player from 'play-sound';
import Config from './Config.class';

class Sampler extends Array {
  add(value) {
    super.push(value);
  }

  delete() {
    const [last] = this.slice(-1);
    last.kill();
    super.pop();
  }
}

export default class Player extends Config {
  constructor() {
    super();
    this.player = player({ player: 'play' });
    this.tracks = new Sampler();
  }

  play(track) {
    try {
      const sample = this.player.play(track);
      this.tracks.add(sample);
    } catch (e) {
      console.log(e);
    }
  }

  stop() {
    try {
      this.tracks.delete();
    } catch (e) {
      console.log(e);
    }
  }
}
