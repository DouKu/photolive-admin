import { Component } from 'react';
import classNames from 'classnames';
import { autobind } from 'core-decorators';

@autobind
class BannerItem extends Component {
  constructor () {
    super();
    this.state = {
      showWrap: false
    }
  }
  render () {
    const { imgSrc, first = false, last = false } = this.props;
    const upIconClassName = classNames({
      'up-btn': true,
      'up-btn-disabled': first
    });
    const downIconClassName = classNames({
      'down-btn': true,
      'down-btn-disabled': last
    });
    const { showWrap } = this.state;
    return (
      <div className="banner-container">
        <div className="left-container" 
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}>
          <img src={imgSrc} 
            className="banner-img">
          </img>
          {
            showWrap && 
            <div className="wrap">
              <div>更换图片</div>
              <div>删除图片</div>
            </div>
          }
        </div>
        <div className="right-container">
          <span className={upIconClassName}>上移<i className="up-icon"></i></span>
          <span className={downIconClassName}>下移<i className="down-icon"></i></span>
        </div>
      </div>
    )
  }
  handleMouseEnter () {
    this.setState({
      showWrap: true
    })
  }
  handleMouseLeave () {
    this.setState({
      showWrap: false
    })
  }
}
export default BannerItem;