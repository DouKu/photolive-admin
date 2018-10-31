import { Component } from 'react';
import Page from '../../layout/page'
import Content from '../../layout/content';
import TitleCard from '../../components/title-card';
import LabelContainer from '../../components/label-container';
import LabelInput from '../../components/label-input';
import Button from '../../components/button';
import { inject } from 'mobx-react';
import { autobind } from 'core-decorators';
import Router from 'next/router';

@Page
@Content
@inject(({store}) => ({
    tagConfig: store.tagConfig
}))
@autobind
class Tag extends Component {
  constructor () {
    super();
    this.state = {
      title: ''
    }
  }

  componentDidMount () {
    this.props.tagConfig.getTagConfig({
      params: {
        albumId: Router.query.id
      }
    });
  }

  handleAddTag () {
    this.props.tagConfig.postTagConfig({
      params: {
        albumId: Router.query.id
      },
      data: {
        title: this.state.title
      }
    });
  }

  handleInputTag (value) {
    this.setState({
      title: value
    });
  }
  
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
        
        <LabelInput placeholder="请输入标签名称" 
          onChange={this.handleInputTag} 
          onClick={this.handleAddTag}>
        </LabelInput>

        <Button style={{marginTop: '10px'}}>
          保存设置
        </Button>
      </div>
    )
  }
}

export default Tag;