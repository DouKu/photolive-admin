import React, { Component } from 'react';
import Header from '../components/header';

const Page = (Content) => 
  class extends Component {
    render () {
      return (
        <div>
          <Header/>
          <Content/>
        </div>
      );
    }
  }

export default Page;