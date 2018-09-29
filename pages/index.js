import React from 'react'
import Link from 'next/link'
import Page from '../layout/page'
import Content from '../layout/content';
import TitleCard from '../components/title-card';

import '../styles/style.scss'

@Page
@Content
class Home extends React.Component {
  render () {
    return (
      <div>
        <TitleCard title="基础配置" desc="一些介绍一些介绍一些介绍一些介绍一一些介绍一些介绍一些介绍一些介绍"/>
      </div>
    )
  }
}

export default Home