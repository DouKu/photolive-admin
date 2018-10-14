import { Component } from 'react';
import Router from 'next/router';

const Auth = (Page) => 
  class extends Component {
    componentWillMount () {
      const token = localStorage.getItem('token');
      if (!token) {
        Router.replace('/auth/signin');
      }
    }
    render () {
      return (
        <Page></Page>
      )
    }
  }

export default Auth;