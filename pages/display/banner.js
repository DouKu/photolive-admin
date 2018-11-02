import { Component } from 'react';
import Page from '../../layout/page'
import Content from '../../layout/content';
import TitleCard from '../../components/title-card';
import BannerContainer from '../../components/banner-container'
import Button from '../../components/button';
import ButtonAdd from '../../components/button-add';
import { inject, observer } from 'mobx-react';
import { autobind } from 'core-decorators';
import Router from 'next/router';

@Page
@Content
@inject(({store}) => ({
  bannerConfig: store.bannerConfig
}))
@observer
@autobind
class Banner extends Component {

  componentDidMount () {
    this.props.bannerConfig.getBannerConfig({
      params: {
        albumId: Router.query.id
      }
    });
  }

  renderBanners () {
    const banners = this.props.bannerConfig.banners;
    return banners.map((banner, index) => (
      <BannerContainer
        key={index}
        first={index === 0}
        last={index === banners.length - 1} 
        imgSrc={banner.tiny}>
      </BannerContainer>
    ))
  }

  render () {
    return (
      <div>
        <TitleCard desc="一些介绍一些介绍一些介绍一些介绍一一些介绍一些介绍一些介绍一些介绍"
          title="首页轮播图设置">
        </TitleCard>
        
        {this.renderBanners()}

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