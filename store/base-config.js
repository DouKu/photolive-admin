import { action, observable, runInAction, computed } from 'mobx';
import api from '../api/base-config';
import { styleMap } from '../lib/enums';

class BaseConfig {
  @observable baseConfig = {
    id: 0,
    themeId: 1,
    name: '',
    activityTime: Date.now(),
    location: ''
  };
  @computed get defaultLabel () {
    return styleMap[this.baseConfig.themeId - 1];
  }
  @action async putBaseConfig (data) {
    const { data: res } = await api.putBaseConfig(data);
    return res;
  }
  @action async getBaseConfig (data) {
    const { data: res } = await api.getBaseConfig(data);
    runInAction(() => {
      this.baseConfig = res.data;
    })
    return res;
  }
}

export default BaseConfig;