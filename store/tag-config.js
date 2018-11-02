import { action, observable, runInAction, computed } from 'mobx';
import api from '../api/tag-config';

class TagConfig {
  @observable tags = []
  @action async getTagConfig (data) {
    const { data:res } = await api.getTagConfig(data);
    runInAction(() => {
      this.tags = res.data.tags;
    })
    return res;
  }
  @action postTagConfig (data) {
    return api.postTagConfig(data);
  }
  @action deleteTagConfig (data) {
    return api.deleteTagConfig(data);
  }
}

export default TagConfig;