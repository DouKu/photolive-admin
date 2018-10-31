import { action, observable } from 'mobx'
import Auth from './auth';
import Album from './album';
import BaseConfig from './base-config';
import TagConfig from './tag-config';

let store = null

class Store {
  @observable lastUpdate = 0
  @observable light = false

  constructor (isServer, lastUpdate) {
    this.auth = new Auth();
    this.album = new Album();
    this.baseConfig = new BaseConfig();
    this.tagConfig = new TagConfig();
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