import { Component } from 'react';
import Header from '../components/header';
import Card from '../components/card';
import '../styles/style.scss'
import { autobind } from 'core-decorators';
import { inject, observer } from 'mobx-react';
import Auth from '../mixins/auth';
import '../styles/style.scss'
import Router from 'next/router';

@Auth
@inject('store')
@observer
@autobind
class Home extends Component {
  componentDidMount () {
    this.props.store.album.getAlbums();
  }
  renderAlbums () {
    const { albums } = this.props.store.album;
    return albums.map((album, index) => {
      return (      
        <Card album={album}
          onEdit={this.handleEdit}
          onShowMenu={this.handleShowMenu}
          onShowGraph={this.handleShowGraph}
          onDelete={this.handleDelete}
          key={index}>
        </Card>
      )
    })
  }
  handleEdit (album) {
    Router.push({
      pathname: '/base',
      query: {
        id: album.id
      } 
    });
  }
  handleShowMenu (album) {
    console.log(album, 'menu')
  }
  handleShowGraph (album) {
    console.log(album, 'graph')
  }
  handleDelete (album) {
    console.log(album, 'delete')
  }
  render () {
    const { albums, count } = this.props.store.album;
    return (
      <div className="main">
        <Header/>
        <div className="page-container">
          <div className="title-container">
            <h4>{count}</h4>
            <div className="search">
              <i className="icon-search"></i>
              <input placeholder="搜索相册"/>
            </div>
          </div>
          <ul className="card-container">
            <li>
              <div className="card-add">
                <i className="icon-add"></i>
                <span>创建新相册</span>
              </div>
            </li>
            {this.renderAlbums()}
          </ul>
        </div>
        <div className="footer">
          <div className="tip">
            <span className="left"></span>没有更多了哦<span className="right"></span>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;