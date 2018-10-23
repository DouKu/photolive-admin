import { Component } from 'react';
import Page from '../../layout/page'
import Content from '../../layout/content';
import TitleCard from '../../components/title-card';

@Page
@Content
class Label extends Component {
  render () {
    return (
      <div>
        <TitleCard desc="一些介绍一些介绍一些介绍一些介绍一一些介绍一些介绍一些介绍一些介绍"
          title="首页轮播图设置">
        </TitleCard>
      </div>
    )
  }
}

export default Label;