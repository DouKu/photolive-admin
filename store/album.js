import { action, observable, runInAction } from 'mobx';
import api from '../api/album';

class Album {
  @observable albums = [];
  @observable count = 0;
  @action async getAlbums () {
    const { data: res } = await api.getAlbums();
    runInAction(() => {
      this.albums = res.data;
      this.count = res.count;
    })
  }
}

export default Album;
