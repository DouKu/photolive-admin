import { action, observable, runInAction, computed } from 'mobx';
import api from '../api/banner-config';

class BannerConfig {
  @observable banners = []
  @action async getBannerConfig (data) {
    const { data:res } = await api.getBannerConfig(data);
    runInAction(() => {
      this.banners = res.data.banners;
    });
    return res;
  }
}

export default BannerConfig;