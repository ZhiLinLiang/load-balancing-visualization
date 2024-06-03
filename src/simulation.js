import { Application } from 'pixi.js'

class Simulation extends Application {
  constructor(options) {
    super({
      width: 1280,
      height: 720,
      backgroundColor: 0x1099bb,
      antialias: true,
      autoStart: false,
      ...options
    })
  }
  async mount() {
    this.app = new Application()

    await app.init({ background: '#1099bb', resizeTo: window })
    document.body.appendChild(app.canvas)
  }
}

export default Simulation
