import { action, observable, runInAction } from 'mobx';
import api from '../api/base-config';

class BaseConfig {
  @observable name = '';

  @action async save (data) {
    const { data: res } = await api.saveBaseConfig({
      data
    })
    console.log(res);
  }
}