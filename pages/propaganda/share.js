import { Component } from 'react';
import Page from '../../layout/page'
import Content from '../../layout/content';
import TitleCard from '../../components/title-card';
import FormItem from '../../components/form-item';
import Input from '../../components/input';
import TextArea from '../../components/text-area';
import Button from '../../components/button';
import ImageUpload from '../../components/upload/image-upload';

@Page
@Content
class Share extends Component {
  render () {
    return (
      <div>
        <TitleCard 
          desc="一些介绍一些介绍一些介绍一些介绍一一些介绍一些介绍一些介绍一些介绍"
          title="分享设置">
        </TitleCard>
        
        <FormItem label="分享标题">
          <Input placeholder="默认为相册名字"></Input>
        </FormItem>

        <ImageUpload
          title="分享图片"
          tip="推荐尺寸："
          subTip="1080（宽）*1920（高）这是微信分享的适合尺寸，显示的效果会更好"
          leftButtonText="更换图片"
          rightButtonText="默认图片">
          <a>模板下载</a>
        </ImageUpload>

        <FormItem label="分享文案"
          className="pl-block-label">
          <TextArea placeholder="请输入文字"></TextArea>
        </FormItem>

        <Button style={{marginTop: '10px'}}>
          保存设置
        </Button>
      </div>
    )
  }
}

export default Share;