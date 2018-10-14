import { action, observable, runInAction } from 'mobx';
import api from '../api/auth';

class Auth {
  @observable token = '';
  @observable user = {};

  // 登录
  @action async signIn (data) {
    const { data: res } = await api.signIn({
      data
    });
    runInAction(() => {
      this.token = res.token;
      this.user = res.user;
      this.setToken();
    })
    return res;
  }

  // 注册
  @action signUp (data) {
    return api.signUp({
      data
    })
  }

  // 退出
  @action signOut () {
  }

  setToken () {
    localStorage.setItem('token', this.token);
  }
}

export default Auth;