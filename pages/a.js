import React from 'react'
import { inject, observer } from 'mobx-react'
import Clock from '../components/clock'

@inject('store') @observer
class Page extends React.Component {
  componentDidMount () {
    this.props.store.start()
  }

  componentWillUnmount () {
    this.props.store.stop()
  }

  render () {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <Clock lastUpdate={this.props.store.lastUpdate} light={this.props.store.light} />
      </div>
    )
  }
}

export default Page