import { Component } from 'react'
import Page from '../../layout/page'
import Content from '../../layout/content';
import TitleCard from '../../components/title-card';
import FormItem from '../../components/form-item';
import Input from '../../components/input';
import TextArea from '../../components/text-area';
import Button from '../../components/button';
import Select from '../../components/select';
import { autobind } from 'core-decorators';
import { inject, observer } from 'mobx-react';
import Router from 'next/router';
import DatePicker from '../../components/date-picker';
import { notify } from 'react-notify-toast';

@Page
@Content
@inject(({store}) => ({
  baseConfig: store.baseConfig
}))
@observer
@autobind
class Base extends Component {
  componentDidMount () {
    this.props.baseConfig.getBaseConfig({
      params: {
        albumId: Router.query.id
      }
    })
  }
  render () {
    const styleOptions = [
      { value: 1, name: '一行三图' },
      { value: 2, name: '瀑布流' },
      { value: 3, name: '一行两图' }
    ];
    const { themeId, name, location } = this.props.baseConfig.base;
    return (
      <div>
        <TitleCard desc="一些介绍一些介绍一些介绍一些介绍一一些介绍一些介绍一些介绍一些介绍"
          title="基础配置">
        </TitleCard>

        <FormItem label="相册名字">
          <Input value={name} onChange={this.handleNameChange} placeholder="请输入相册名字"></Input>
        </FormItem>

        <FormItem label="活动时间">
          <DatePicker default={new Date()} onChange={this.handleActivityTimeChange}></DatePicker>
        </FormItem>

        <FormItem label="活动地点" 
          className="pl-block-label">
          <TextArea value={location} onChange={this.handelAddrChange} placeholder="请填写活动地点"></TextArea>
        </FormItem>

        <FormItem label="相册风格">
          <Select defaultValue={themeId}
            style={{minWidth: '80px'}}
            defaultLabel={this.props.baseConfig.defaultLabel}
            options={styleOptions}
            onChange={this.handleStyleChange}>
          </Select>
        </FormItem>
        
        <Button onClick={this.handleSave} style={{marginTop: '10px'}}>保存设置</Button>
      </div>
    )
  }
  handleNameChange (value) {
    this.props.baseConfig.base.name = value;
  }
  handelAddrChange (value) {
    this.props.baseConfig.base.location = value;
  }
  handleStyleChange (value) {
    this.props.baseConfig.base.themeId = value;
  }
  handleActivityTimeChange (value) {
    value = value.getTime();
    this.props.baseConfig.base.activityTime = value;
  }
  handleSave () {
    const albumId = Router.query.id;
    const { name, location, themeId, activityTime } = this.props.baseConfig.base;
    this.props.baseConfig.putBaseConfig({
      params: {
        albumId
      },
      data: {
        name,
        activityTime,
        location,
        themeId
      }
    }).then(() => {
      notify.show('修改成功!', 'custom', 2000, {
        background: '#ffffff', text: "#646466"
      });
      this.props.baseConfig.getBaseConfig();
    })
  }
}

export default Base