import { Component } from 'react';
import { autobind } from 'core-decorators';
import { inject, observer } from 'mobx-react';
import Router from 'next/router';

@inject('store')
@observer
@autobind
class SignUp extends Component {
  constructor () {
    super();
    this.state = {
      account: '',
      nickname: '',
      realName: '',
      password: ''
    }
  }
  handleInputAccount (event) {
    this.setState({
      account: event.target.value
    });
  }
  handleInputRealName (event) {
    this.setState({
      realName: event.target.value
    });
  }
  handleInputPassword (event) {
    this.setState({
      password: event.target.value
    });
  }
  handleInputNickName (event) {
    this.setState({
      nickname: event.target.value
    });
  }
  handleSignUp () {
    this.props.store.auth.signUp({
      ...this.state
    }).then(res => {
      Router.replace('/auth/signin');
    })
  }
  render () {
    return (
      <div>
        <h3>SignUp</h3>
        Account<input onChange={this.handleInputAccount}></input><br/>
        NickName<input onChange={this.handleInputNickName}></input><br/>
        RealName<input onChange={this.handleInputRealName}></input><br/>
        Password<input type="password" onChange={this.handleInputPassword}></input><br/>
        <button onClick={this.handleSignUp}>注册</button>
      </div>
    )
  }
}

export default SignUp;