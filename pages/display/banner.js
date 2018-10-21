import { Component } from 'react';
import Page from '../../layout/page'
import Content from '../../layout/content';
import TitleCard from '../../components/title-card';
import FormItem from '../../components/form-item';
import Input from '../../components/input';

@Page
@Content
class Banner extends Component {
  render () {
    return (
      <div>
        <TitleCard desc="一些介绍一些介绍一些介绍一些介绍一一些介绍一些介绍一些介绍一些介绍"
          title="标签设置">
        </TitleCard>

        <p className="sub-title">当前标签</p>

        <FormItem label="分享标题">
          <Input placeholder="默认为相册名字"></Input>
        </FormItem>

      </div>
    )
  }
}

export default Banner;