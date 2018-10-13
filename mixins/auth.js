import { Component } from 'react';

const Auth = (Page) => 
  class extends Component {
    componentWillMount () {
      console.log('test')
    }
    render () {
      return (
        <Page></Page>
      )
    }
  }

export default Auth;