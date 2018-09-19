import React from 'react'
import Link from 'next/link'

import '../styles/style.scss';

export default () => (
  <ul>
    <li><Link href='/a'><a>a</a></Link></li>
    <li><Link href='/b'><a>b</a></Link></li>
  </ul>
)