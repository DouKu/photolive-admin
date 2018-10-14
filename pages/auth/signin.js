import { Component } from 'react';
import { autobind } from 'core-decorators';
import { inject, observer } from 'mobx-react';
import Router from 'next/router';

@inject('store')
@observer
@autobind
class SignIn extends Component {
  constructor () {
    super();
    this.state = {
      account: '',
      password: ''
    }
  }
  handleInputAccount (event) {
    this.setState({
      account: event.target.value
    });
  }
  handleInputPassword (event) {
    this.setState({
      password: event.target.value
    });
  }
  handleSignIn () {
    this.props.store.auth.signIn({
      ...this.state
    }).then(res => {
      if (res.code === 200) {
        Router.replace('/');
      }
    })
  }
  render () {
    return (
      <div>
        <h3>SignIn</h3>
        Account<input onChange={this.handleInputAccount}></input><br/>
        Password<input type="password" onChange={this.handleInputPassword}></input><br/>
        <button onClick={this.handleSignIn}>登录</button>
      </div>
    )
  }
}

export default SignIn;