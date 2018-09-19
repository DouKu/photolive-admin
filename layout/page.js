import { Component } from 'react';
import Header from '../components/header';
import Sidebar from '../components/sidebar';

const Page = (Content) => 
  class extends Component {
    render () {
      return (
        <div className="main">
          <Header/>
          <div className="page-container">
            <div className="sidebar-container">
              <Sidebar/>
            </div>
            <div className="content-container">
              <Content/>
            </div>
          </div>
        </div>
      );
    }
  }

export default Page;