import { Component } from 'react';
import Page from '../../layout/page'
import Content from '../../layout/content';
import TitleCard from '../../components/title-card';
import Button from '../../components/button';
import ImageUpload from '../../components/upload/image-upload';

@Page
@Content
class StartUp extends Component {
  render () {
    return (
      <div>
        <TitleCard 
          desc="一些介绍一些介绍一些介绍一些介绍一一些介绍一些介绍一些介绍一些介绍"
          title="启动页设置">
        </TitleCard>

        <ImageUpload
          title="当前图片"
          tip="图片大小限制：不超过5MB"
          subTip="小tips：如果图片太大，启动的时候要加载很久哦，建议图片大小为2M以内"
          leftButtonText="更换图片"
          rightButtonText="模板下载">
        </ImageUpload>

        <Button style={{marginTop: '10px'}}>
          保存设置
        </Button>
      </div>
    )
  }
}

export default StartUp;