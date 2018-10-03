import { Component } from 'react';
import Header from '../components/header';
import Sidebar from '../components/sidebar';
import SideTag from '../components/side-tag';
import { menus } from '../config/sidebar';
import '../styles/style.scss'

const Page = (Content) => 
  class extends Component {
    render () {
      return (
        <div className="main">
          <Header/>
          <div className="page-container">
            <div className="sidebar-container">
              <SideTag/>
              <Sidebar menus={menus}/>
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