import gamepad from 'gamepad';
import Config from './Config.class';

export default class Gamepad extends Config {
  constructor() {
    super();
    gamepad.init();

    for (let i = 0, l = gamepad.numDevices(); i < l; i++) {
      console.log(i, gamepad.deviceAtIndex());
    }

    // Create a game loop and poll for events
    setInterval(gamepad.processEvents, 16);
    // Scan for new gamepads as a slower rate
    setInterval(gamepad.detectDevices, 500);
  }

  trigger(event, action) {
    gamepad.on(event, (id, axis, value) => {
      action(id, axis, value);
    });
  }
}
