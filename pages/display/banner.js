import { Component } from 'react';
import Page from '../../layout/page'
import Content from '../../layout/content';
import TitleCard from '../../components/title-card';
import BannerContainer from '../../components/banner-container'
import Button from '../../components/button';
import ButtonAdd from '../../components/button-add';
@Page
@Content
class Banner extends Component {
  render () {
    return (
      <div>
        <TitleCard desc="一些介绍一些介绍一些介绍一些介绍一一些介绍一些介绍一些介绍一些介绍"
          title="首页轮播图设置">
        </TitleCard>
        
        <BannerContainer first={true} imgSrc="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540491885453&di=d28919a0ba6b111c50c6cf2b75cf7bc5&imgtype=0&src=http%3A%2F%2Fp2.pccoo.cn%2Fstore%2F20150416%2F20150416141412170.jpg"></BannerContainer>
        <BannerContainer imgSrc="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1541087774&di=ffe512c71621a93c7a3506fdf7b21fd5&imgtype=jpg&er=1&src=http%3A%2F%2Fimg1.qunarzz.com%2Ftravel%2Fd1%2F1502%2F24%2F24006a1a802124.jpg_r_650x433x95_009c2577.jpg"></BannerContainer>
        <BannerContainer last={true} imgSrc="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1541087788&di=342a8d4f97038305eacbc56158fdeafd&imgtype=jpg&er=1&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F14%2F92%2F25%2F13V58PICJa6_1024.jpg"></BannerContainer>

        <ButtonAdd>
          点击添加图片
        </ButtonAdd>

        <Button style={{marginTop: '10px'}}>
          保存设置
        </Button>
      </div>
    )
  }
}

export default Banner;