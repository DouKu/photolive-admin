import { Component } from 'react';
import { autobind } from 'core-decorators';
import { inject, observer } from 'mobx-react';

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
  handleInpuAccount (event) {
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
      console.log(res);
    })
  }
  render () {
    return (
      <div>
        <h3>SignUp</h3>
        Account<input onChange={this.handleInpuAccount}></input><br/>
        Password<input type="password" onChange={this.handleInputPassword}></input><br/>
        <button onClick={this.handleSignIn}>注册</button>
      </div>
    )
  }
}

export default SignIn;