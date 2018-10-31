import { action, observable, runInAction, computed } from 'mobx';
import api from '../api/tag-config';

class TagConfig {
  @observable tags = []
  @action async getTagConfig (data) {
    const { data:res } = await api.getTagConfig(data);
    console.log(res);
    runInAction(() => {
      this.tags = res.data.tags;
    })
    return res;
  }
  @action async postTagConfig (data) {
    return api.postTagConfig(data);
  }
}

export default TagConfig;