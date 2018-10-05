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
class Propaganda extends Component {
  render () {
    return (
      <div>
        <TitleCard title="分享设置" desc="一些介绍一些介绍一些介绍一些介绍一一些介绍一些介绍一些介绍一些介绍"/>
        <FormItem label="分享标题">
          <Input placeholder="默认为相册名字"></Input>
        </FormItem>
        <ImageUpload></ImageUpload>
        <FormItem label="分享文案" className="pl-block-label">
          <TextArea placeholder="请输入文字"></TextArea>
        </FormItem>
        <Button style={{marginTop: '6px'}}>保存设置</Button>
      </div>
    )
  }
}

export default Propaganda;