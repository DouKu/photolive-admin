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
      this.setAuth(res.token, res.user);
      this.saveAuth();
    });
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

  saveAuth () {
    localStorage.setItem('token', this.token);
    localStorage.setItem('user', JSON.stringify(this.user));
  }

  setAuth (token, user) {
    this.token = token;
    this.user = user;
  }

}

export default Auth;