import { Component } from 'react';
import Button from '../button';

class ImageUpload extends Component {
  render () {
    return (
      <div className="pl-image-upload">
        <div className="pl-image-box">
          <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1538724429190&di=a19c8af52284c5a8993984684d1e82e6&imgtype=0&src=http%3A%2F%2Fp2.pccoo.cn%2Fstore%2F20150416%2F20150416141412170.jpg"></img>
        </div>
        <div className="pl-image-content">
          <h3>分享图片</h3>
          <p>推荐尺寸：<br/>
          1080（宽）*1920（高）这是微信分享的适合尺寸，显示的效果会更好</p>
          <div className="action">
            <a>模板下载</a>
          </div>
          <div className="action-btns">
            <Button>更换图片</Button>
            <Button>默认图片</Button>
          </div>
        </div>
      </div>
    )
  }
}

export default ImageUpload;