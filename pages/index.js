import { Component } from 'react'
import Page from '../layout/page'
import Content from '../layout/content';
import TitleCard from '../components/title-card';
import FormItem from '../components/form-item';
import Input from '../components/input';
import TextArea from '../components/text-area';
import Button from '../components/button';

@Page
@Content
class Home extends Component {
  render () {
    return (
      <div>
        <TitleCard title="基础配置" desc="一些介绍一些介绍一些介绍一些介绍一一些介绍一些介绍一些介绍一些介绍"/>
        <FormItem label="相册名字">
          <Input placeholder="请输入相册名字"></Input>
        </FormItem>
        <FormItem label="活动时间">
          <Input placeholder="请输入相册名字"></Input>
        </FormItem>
        <FormItem label="活动地点" className="pl-block-label">
          <TextArea placeholder="请填写活动地点"></TextArea>
        </FormItem>
        <Button style={{marginTop: '6px'}}>保存设置</Button>
      </div>
    )
  }
}

export default Home