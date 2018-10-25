import { Component } from 'react';
import TitleCard from '../../components/title-card';
import Page from '../../layout/page'
import Content from '../../layout/content';
import FormItem from '../../components/form-item';
import Input from '../../components/input';
import Button from '../../components/button';
import ButtonAdd from '../../components/button-add';

@Page
@Content
class Word extends Component {
  render () {
    return (
      <div>
        <TitleCard 
          desc="一些介绍一些介绍一些介绍一些介绍一一些介绍一些介绍一些介绍一些介绍"
          title="词条设置">
        </TitleCard>

        <FormItem label="相册名字">
          <Input placeholder="请输入相册名字"></Input>
        </FormItem>

        <ButtonAdd>
          点击添加词条卡片
        </ButtonAdd>

        <Button style={{marginTop: '10px'}}>
          保存设置
        </Button>
      </div>
    );
  }
}

export default Word;