import Router from './router'

class App {
  constructor() {
    const router = new Router()
    this.router = router
  }

  init() {
    this.router.history.start()
  }
}

export default new App
