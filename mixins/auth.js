import { Component } from 'react';
import Router from 'next/router';
import { inject, observer } from 'mobx-react';

const Auth = (Page) => 
  @inject('store')
  @observer
  class extends Component {
    componentDidMount () {
      const token = window.localStorage.getItem('token');
      const user = window.localStorage.getItem('user');
      if (!token || !user) {
        Router.replace('/auth/signin');
        return;
      }
      this.props.store.auth.setAuth(token, JSON.parse(user));
    }
    render () {
      return (
        <Page></Page>
      )
    }
  }

export default Auth;