import { action, observable, runInAction } from 'mobx';
import api from '../api/auth';

class Auth {
  @observable token = '';
  @observable user = {};

  // 登录
  @action async signIn (data) {
    const { res } = await api.signIn({
      data
    });
    runInAction (() => {
      console.log(res)
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
}

export default Auth;