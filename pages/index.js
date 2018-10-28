import { Component } from 'react'
import Page from '../layout/page'
import Content from '../layout/content';
import TitleCard from '../components/title-card';
import FormItem from '../components/form-item';
import Input from '../components/input';
import TextArea from '../components/text-area';
import Button from '../components/button';
import Select from '../components/select';
import { autobind } from 'core-decorators';

@Page
@Content
@autobind
class Home extends Component {
  constructor () {
    super();
    this.state = {
      themeId: 1,
      themeStyle: '一行三图'
    }
  }
  render () {
    const styleOptions = [
      { value: 1, name: '一行三图' },
      { value: 2, name: '瀑布流' },
      { value: 3, name: '一行两图' }
    ];
    const { themeId, themeStyle } = this.state;
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
          <Select defaultValue={themeId}
            defaultLabel = {themeStyle}
            options={styleOptions}
            onChange={this.handleStyleChange}>
          </Select>
        </FormItem>
        
        <Button style={{marginTop: '10px'}}>保存设置</Button>
      </div>
    )
  }
  handleStyleChange (themeId, themeStyle) {
    this.setState({
      themeId,
      themeStyle
    });
    console.log(themeId, themeStyle, 'dddd');
  }
}

export default Home