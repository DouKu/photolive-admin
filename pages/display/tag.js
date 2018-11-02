import { Component } from 'react';
import Page from '../../layout/page'
import Content from '../../layout/content';
import TitleCard from '../../components/title-card';
import LabelContainer from '../../components/label-container';
import LabelInput from '../../components/label-input';
import Button from '../../components/button';
import { inject, observer } from 'mobx-react';
import { autobind } from 'core-decorators';
import Router from 'next/router';

@Page
@Content
@inject(({store}) => ({
  tagConfig: store.tagConfig
}))
@observer
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

  handleDeleteTag (tagId) {
    this.props.tagConfig.deleteTagConfig({
      params: {
        tagId
      }
    });
  }
  
  renderTags () {
    const tags = this.props.tagConfig.tags;
    return tags.map((tag, index) => (
      <LabelContainer 
        id={tag.id}
        onDelete={this.handleDeleteTag}
        title={tag.title}
        key={index}
        check={false}
        first={index === 0}
        last={index === tags.length - 1}>
      </LabelContainer>
    ))
  }

  render () {
    return (
      <div>
        <TitleCard desc="一些介绍一些介绍一些介绍一些介绍一一些介绍一些介绍一些介绍一些介绍"
          title="标签设置">
        </TitleCard>

        <p className="sub-title">当前标签</p>
        {this.renderTags()}
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