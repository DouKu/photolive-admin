import { action, observable } from 'mobx';

class Auth {
  @observable token = '';
  @observable user = {};

  // 登录
  @action signIn = () => {
  }

  // 注册
  @action signUp = () => {
  }

  // 退出
  @action signOut = () => {
  }
}