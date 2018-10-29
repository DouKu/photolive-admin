import { action, observable, runInAction } from 'mobx';
import api from '../api/base-config';

class BaseConfig {
  @action async putConfig (data) {
    const { data: res } = await api.saveBaseConfig(data);
    return res;
  }
}

export default BaseConfig;