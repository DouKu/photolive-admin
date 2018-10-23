import { Component } from 'react';
import Page from '../../layout/page'
import Content from '../../layout/content';
import TitleCard from '../../components/title-card';
import LabelContainer from '../../components/label-container';
import LabelInput from '../../components/label-input';
import Button from '../../components/button';

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

        <LabelContainer title="所有照片"
          check={false}
          first={true}>
        </LabelContainer>
        <LabelContainer title="婚礼前夕"
          check={true}
          last={true}>
        </LabelContainer>
        
        <LabelInput placeholder="请输入标签名称"></LabelInput>

        <Button style={{marginTop: '6px'}}>
          保存设置
        </Button>
      </div>
    )
  }
}

export default Banner;