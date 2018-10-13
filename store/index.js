import { action, observable } from 'mobx'
import Auth from './auth';

let store = null

class Store {
  @observable lastUpdate = 0
  @observable light = false

  constructor (isServer, lastUpdate) {
    this.auth = new Auth();
    this.lastUpdate = lastUpdate;
  }

  @action start = () => {
    this.timer = setInterval(() => {
      this.lastUpdate = Date.now()
      this.light = true
    }, 1000)
  }

  stop = () => clearInterval(this.timer)
}

export function initializeStore (isServer, lastUpdate = Date.now()) {
  if (isServer) {
    return new Store(isServer, lastUpdate)
  } else {
    if (store === null) {
      store = new Store(isServer, lastUpdate)
    }
    return store
  }
}