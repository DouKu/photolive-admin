import { Component } from 'react';
import Button from '../button';
import ButtonFile from '../button-file';
import { autobind } from 'core-decorators';
import fileApi from '../../api/file'

@autobind
class ImageUpload extends Component {
  constructor () {
    super();
    this.state = {
      showWrap: false
    }
  }
  handleMouseEnter () {
    this.setState({
      showWrap: true
    });
  }
  handleMouseLeave () {
    this.setState({
      showWrap: false
    });
  }
  handleFileChange (file) {
    fileApi.upload(file).then(res => {
      console.log(res);
    });
  }
  render () {
    const {
      title,
      tip,
      subTip,
      leftButtonText,
      rightButtonText,
      children
    } = this.props;
    const { showWrap } = this.state;
    return (
      <div className="pl-image-upload">
        <div className="pl-image-box"
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}>
          <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1538724429190&di=a19c8af52284c5a8993984684d1e82e6&imgtype=0&src=http%3A%2F%2Fp2.pccoo.cn%2Fstore%2F20150416%2F20150416141412170.jpg"></img>
          {
            showWrap && 
            <div className="wrap">
              <div>更换图片</div>
            </div>
          }
        </div>
        <div className="pl-image-content">
          <h3>{title}</h3>
          <p>{tip}<br/>
          {subTip}</p>
          <div className="action">
            {children}
          </div>
          <div className="action-btns">
            <ButtonFile
              onChange={this.handleFileChange}>
              {leftButtonText}
            </ButtonFile>
            <Button>{rightButtonText}</Button>
          </div>
        </div>
      </div>
    )
  }
}

export default ImageUpload;