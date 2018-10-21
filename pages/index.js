import { Component } from 'react'
import Page from '../layout/page'
import Content from '../layout/content';
import TitleCard from '../components/title-card';
import FormItem from '../components/form-item';
import Input from '../components/input';
import TextArea from '../components/text-area';
import Button from '../components/button';
import Select from '../components/select';

@Page
@Content
class Home extends Component {
  render () {
    const styleOptions = [
      { value: 1, name: 'A' },
      { value: 2, name: 'B' },
      { value: 3, name: 'D' },
      { value: 4, name: 'C' },
      { value: 5, name: 'E' },
      { value: 6, name: 'F' },
      { value: 7, name: 'G' },
      { value: 8, name: 'H' },
      { value: 9, name: 'I' },
      { value: 10, name: 'J' },
      { value: 11, name: 'K' },
      { value: 12, name: 'L' }
    ];
    const defaultValue = 'A';
    return (
      <div>
        <TitleCard desc="一些介绍一些介绍一些介绍一些介绍一一些介绍一些介绍一些介绍一些介绍"
          title="基础配置">
        </TitleCard>

        <FormItem label="相册名字">
          <Input placeholder="请输入相册名字"></Input>
        </FormItem>

        <FormItem label="活动时间">
          <Input placeholder="请输入相册名字"></Input>
        </FormItem>

        <FormItem label="活动地点" 
          className="pl-block-label">
          <TextArea placeholder="请填写活动地点"></TextArea>
        </FormItem>

        <FormItem label="相册风格">
          <Select defaultValue={defaultValue} 
            options={styleOptions}>
          </Select>
        </FormItem>
        
        <Button style={{marginTop: '6px'}}>保存设置</Button>
      </div>
    )
  }
}

export default Home