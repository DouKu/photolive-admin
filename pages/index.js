import React from 'react'
import Link from 'next/link'
import Page from '../layout/page'

import '../styles/style.scss'

@Page
class Home extends React.Component {
  render () {
    return (
      <ul>
        <li><Link href='/a'><a>a</a></Link></li>
        <li><Link href='/b'><a>b</a></Link></li>
      </ul>
    )
  }
}

export default Home