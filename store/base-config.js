import { action, observable, runInAction, computed } from 'mobx';
import api from '../api/base-config';
import { styleMap } from '../lib/enums';

class BaseConfig {
  @observable base = {
    id: 0,
    themeId: 1,
    name: '',
    activityTime: Date.now(),
    location: ''
  };
  @computed get defaultLabel () {
    return styleMap[this.base.themeId - 1];
  }
  @action async putBaseConfig (data) {
    const { data: res } = await api.putBaseConfig(data);
    return res;
  }
  @action async getBaseConfig (data) {
    const { data: res } = await api.getBaseConfig(data);
    runInAction(() => {
      this.base = res.data;
    })
    return res;
  }
}

export default BaseConfig;