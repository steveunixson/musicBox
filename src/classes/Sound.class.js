import player from 'play-sound';
import Config from './Config.class';

export default class Player extends Config {
  constructor() {
    super();
    this.player = player({ player: 'play' });
  }

  play(track) {
    try {
      this.track = this.player.play(track);
    } catch (e) {
      console.log(e);
    }
  }

  stop() {
    try {
      this.track.kill();
    } catch (e) {
      console.log(e);
    }
  }
}
